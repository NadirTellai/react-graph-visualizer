import React, { Component } from "react";
import Graph from "react-graph-visualizer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Graph
          initialGraph={{
            nodes: [
              {
                name: "Peter",
                label: "Person",
                id: 1
              },
              {
                name: "Michael",
                label: "Person",
                id: 2
              },
              {
                name: "Neo4j",

                id: 3
              },
              {
                name: "Graph Database",

                id: 4
              }
            ],
            links: [
              {
                source: 1,
                target: 2,
                label: "KNOWS",
                since: 2010
              },
              {
                source: 1,
                target: 3,
                label: "FOUNDED"
              },

              {
                source: 3,
                target: 4,
                label: "IS_A"
              }
            ]
          }}
          width={700}
          height={500}
          backgroundColor={"#e5e6e7"}
          linkStyle={{ directed: true, distance: 300, color: "black" }}
          nodeStyle={{
            radius: 20,
            borderWidth: 2,
            borderColor: "black",
            background: "black"
          }}
          nameStyle={{ size: 15, color: "black", x: "center", y: "bottom" }}
          labelStyle={{ show: false, size: 10, color: "black" }}
        />
      </div>
    );
  }
}
