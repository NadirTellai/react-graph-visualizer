import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect
} from "react";
import * as d3 from "d3";
import "d3-selection-multi";
import "./graph.css";

const Graph = React.memo(
  forwardRef((props, ref) => {
    const btn = useRef(null);
    var graph = props.initialGraph || { nodes: [], links: [] };
    var realProps = {};
    var nodes = [];
    var links = [];
    propsValidation();

    // set Graph function to call from parent
    useImperativeHandle(ref, () => ({
      setGraph(data) {
        graph = data;
        btn.current.click();
      }
    }));

    useEffect(() => {
      drawBarChart();
    });

    function drawBarChart() {
      propsValidation();
      // function binding
      update = update.bind(this);
      ticked = ticked.bind(this);
      draw = draw.bind(this);
      mutate = mutate.bind(this);

      //variable declarations
      var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        node,
        edgepaths,
        edgelabels,
        link;

      var simulation = d3
        .forceSimulation()
        .force(
          "link",
          d3
            .forceLink()
            .id(function(d) {
              return d.id;
            })
            .distance(realProps.distance)
        )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);
      var drag = d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged);

      // arrow drawing
      svg
        .append("defs")
        .append("marker")
        .attrs({
          id: "arrowhead",
          viewBox: "-0 -5 10 10",
          refX:
            realProps.radius == 10
              ? 16
              : ((realProps.radius - 10) / 10) * 7 + 16,
          refY: 0,
          orient: "auto",
          markerWidth: 5,
          markerHeight: 5,
          xoverflow: "visible"
        })
        .append("svg:path")
        .attr("d", "M 0,-5 L 10 ,0 L 0,5")
        .attr("class", "arrowhead")
        .style("stroke", "none")
        .style("fill", realProps.linkColor);

      // image drawing
      for (let i = 0; i < nodes.length; i++) {
        svg
          .append("defs")
          .append("svg:pattern")
          .attrs({
            id: `image${nodes[i].id}`,
            x: "0",
            y: "0",
            height: "40",
            width: "40"
          })
          .append("svg:image")
          .attrs({
            x: "0",
            y: "0",
            height: "40",
            width: "40",
            "xlink:href": nodes[i].img
          });
      }

      update();

      // fixing a bug
      if (!links.length && graph.links.length) {
        draw();
      }
      if (!nodes.length && graph.nodes.length) {
        draw();
      }

      function update() {
        //links
        link = svg.selectAll(".link").data(links);
        link.exit().remove();
        var linkEnter = link
          .enter()
          .append("line")
          .attr("class", "link");
        link = linkEnter.merge(link);

        // edges path between nodes
        d3.selectAll(".edgepath").remove();
        edgepaths = svg
          .selectAll(".edgepath")
          .data(links)
          .enter()
          .append("path")
          .attrs({
            class: "edgepath",
            "fill-opacity": 0,
            "stroke-width": 3,
            "marker-end": "url(#arrowhead)",
            stroke: realProps.linkColor,
            "stroke-opacity": 1,
            id: function(d, i) {
              if (d.source.id && d.target.id)
                return "edgepath " + d.source.id + "- " + d.target.id;
              else return "edgepath " + d.source + "- " + d.target;
            }
          })
          .style("pointer-events", "none");

        // edge labels
        if (realProps.showLabel) {
          edgelabels = svg
            .selectAll(".edgelabel")
            .remove()
            .data(links)
            .enter()
            .append("text")
            .attr("dy", -5)
            .style("pointer-events", "none")
            .attrs({
              class: "edgelabel",
              id: function(d, i) {
                return "edgelabel" + i;
              }
            });
          edgelabels
            .append("textPath")
            .attr("xlink:href", function(d, i) {
              if (d.source.id && d.target.id)
                return "#edgepath " + d.source.id + "- " + d.target.id;
              else return "#edgepath " + d.source + "- " + d.target;
            })
            .style("text-anchor", "middle")
            .style("font-size", realProps.labelSize)
            .style("fill", realProps.labelColor)
            .style("stroke", realProps.labelColor)
            .style("pointer-events", "none")
            .attr("startOffset", "50%")
            .attr("class", "label")
            .text(function(d) {
              return d.label;
            });
        }

        // nodes

        node = svg.selectAll(".node").data(nodes);
        node.exit().remove();
        var nodeEnter = node
          .enter()
          .append("g")
          .attr("class", "node")
          .call(drag);
        nodeEnter
          .append("circle")
          .attr("r", realProps.radius == undefined ? 30 : realProps.radius)
          .attr("stroke", realProps.borderColor)
          .attr("stroke-width", props.nodeStyle.borderWidth || 1)

          .style(
            "fill",
            props.nodeStyle.background != "image" ||
              props.nodeStyle.background == undefined
              ? realProps.nodeBackground
              : d => `url(#image${d.id})`
          );

        nodeEnter
          .append("text")
          .attr("dx", d => {
            return props.nameStyle.x == "right"
              ? 0.4 * realProps.radius
              : props.nameStyle.x == "left"
              ? -((realProps.nameSize * 0.7 * d.name.length) / 2) -
                realProps.radius
              : (-d.name.length / 2) * realProps.nameSize * 0.5;
          })
          .attr(
            "dy",
            props.nameStyle.y == "top"
              ? -realProps.radius - realProps.nameSize * 0.3
              : realProps.radius + realProps.nameSize * 0.8
          )

          .attr("class", "nodeText")
          .style("fill", realProps.nameColor)
          .style("font-size", realProps.nameSize)
          .text(function(d) {
            return d.name;
          });
        node = nodeEnter.merge(node);

        // draw event listener
        d3.select("#button").on("click", draw);

        // simulation params
        simulation.nodes(nodes);
        simulation.force("link").links(links);

        // to raise node on top of edgepaths
        d3.selectAll(".node").raise();
      }

      function draw() {
        // getting new data
        propsValidation();
        var newNodes = graph.nodes;
        var newLinks = graph.links;

        mutate(newNodes, newLinks);
      }

      function ticked() {
        // links positionings
        link
          .attr("x1", function(d) {
            return d.source.x;
          })
          .attr("y1", function(d) {
            return d.source.y;
          })
          .attr("x2", function(d) {
            return d.target.x;
          })
          .attr("y2", function(d) {
            return d.target.y;
          });

        // nodes positionings
        node.attr("transform", function(d) {
          d.x = Math.max(
            realProps.radius,
            Math.min(width - realProps.radius, d.x)
          );
          d.y = Math.max(
            realProps.radius,
            Math.min(height - realProps.radius, d.y)
          );
          return "translate(" + d.x + ", " + d.y + ")";
        });

        // edges drawing
        edgepaths.attr("d", function(d) {
          return (
            "M " +
            d.source.x +
            " " +
            d.source.y +
            " L " +
            d.target.x +
            " " +
            d.target.y
          );
        });

        if (realProps.showLabel) {
          edgelabels.attr("transform", function(d) {
            if (d.target.x < d.source.x) {
              var bbox = this.getBBox();

              var rx = bbox.x + bbox.width / 2;
              var ry = bbox.y + bbox.height / 2;
              return "rotate(180 " + rx + " " + ry + ")";
            } else {
              return "rotate(0)";
            }
          });
        }
      }

      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      // nodes and links should be mutated and not replaced
      function mutate(newNodes, newLinks) {
        var nodesRemoves = [];
        nodes.map((node, index) => {
          var flag = true;
          newNodes.map(newNode => {
            if (node.id == newNode.id) flag = false;
          });
          if (flag) nodesRemoves.push(index);
        });

        var nodesAdds = newNodes.filter(newNode => {
          var flag = true;
          nodes.map(node => {
            if (newNode.id == node.id) flag = false;
          });
          return flag;
        });

        var linksRemoves = [];
        links.map((link, index) => {
          var flag = true;
          newLinks.map(newLink => {
            if (
              link.source.id + " - " + link.target.id ==
              newLink.source + " - " + newLink.target
            )
              flag = false;
          });

          if (flag) linksRemoves.push(index);
        });

        var linksAdds = newLinks.filter(newLink => {
          var flag = true;
          links.map(link => {
            if (
              link.source.id + " - " + link.target.id ==
              newLink.source + " - " + newLink.target
            )
              flag = false;
          });
          return flag;
        });

        nodesRemoves.reverse().map(nodeIndexToRemove => {
          nodes.splice(nodeIndexToRemove, 1);
        });

        update();

        nodesAdds.map(nodeToAdd => nodes.push(nodeToAdd));

        nodesAdds.map(node => {
          svg
            .append("defs")
            .append("svg:pattern")
            .attrs({
              id: `image${node.id}`,
              x: "0",
              y: "0",
              class: "nodeImg",
              height: realProps.radius,
              width: realProps.radius
            })
            .append("svg:image")
            .attrs({
              x: "0",
              y: "0",
              height: realProps.radius * 2,
              width: realProps.radius * 2,
              "xlink:href": node.img
            });
        });

        update();

        linksRemoves.reverse().map(linkIndexToRemove => {
          links.splice(linkIndexToRemove, 1);
        });

        update();

        linksAdds.map(linkToAdd => links.push(linkToAdd));

        update();

        return nodesAdds;
      }
    }

    function isColor(strColor) {
      var s = new Option().style;
      s.color = strColor;
      return (
        s.color == strColor ||
        /^#[0-9A-F]{6}$/i.test(strColor) ||
        /^#[0-9A-F]{3}$/i.test(strColor)
      );
    }

    function propsValidation() {
      if (
        props.nodeStyle.borderColor == undefined ||
        !isColor(props.nodeStyle.borderColor)
      )
        realProps.borderColor = "black";
      else realProps.borderColor = props.nodeStyle.borderColor;

      if (props.nodeStyle.radius == undefined || isNaN(props.nodeStyle.radius))
        realProps.radius = 30;
      else realProps.radius = props.nodeStyle.radius;

      if (
        props.linkStyle.distance == undefined ||
        isNaN(props.linkStyle.distance)
      )
        realProps.distance = 200;
      else realProps.distance = props.linkStyle.distance;

      if (props.linkStyle.color == undefined || !isColor(props.linkStyle.color))
        realProps.linkColor = "black";
      else realProps.linkColor = props.linkStyle.color;

      if (props.labelStyle.size == undefined || isNaN(props.labelStyle.size))
        realProps.labelSize = 10;
      else realProps.labelSize = props.labelStyle.size;

      if (
        props.labelStyle.color == undefined ||
        !isColor(props.labelStyle.color)
      )
        realProps.labelColor = "black";
      else realProps.labelColor = props.labelStyle.color;

      if (
        props.nodeStyle.background == undefined ||
        !isColor(props.nodeStyle.background)
      )
        realProps.nodeBackground = "black";
      else realProps.nodeBackground = props.nodeStyle.background;

      if (props.nameStyle.color == undefined || !isColor(props.nameStyle.color))
        realProps.nameColor = "black";
      else realProps.nameColor = props.nameStyle.color;

      if (props.nameStyle.size == undefined || isNaN(props.nameStyle.size))
        realProps.nameSize = 20;
      else realProps.nameSize = props.nameStyle.size;

      if (props.width == undefined || isNaN(props.width)) realProps.width = 850;
      else realProps.width = props.width;
      if (props.height == undefined || isNaN(props.height))
        realProps.height = 450;
      else realProps.height = props.height;

      if (
        props.labelStyle.show == undefined ||
        typeof props.labelStyle.show != "boolean"
      )
        realProps.showLabel = false;
      else realProps.showLabel = props.labelStyle.show;
    }
    return (
      <div>
        <button id="button" ref={btn}></button>
        <svg
          style={{ backgroundColor: props.backgroundColor }}
          width={realProps.width}
          height={realProps.height}
        ></svg>
      </div>
    );
  }),
  (prevProps, nextProps) => {
    return true;
  }
);
export default Graph;