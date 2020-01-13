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
                label: "Database",
                id: 3
              },
              {
                name: "Graph Database",
                label: "Database",
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
          width={850}
          height={450}
          backgroundColor={"#e5e6e7"}
          linkStyle={{ distance: 500, color: "blue" }}
          nodeStyle={{
            radius: 40,
            borderWidth: 2,
            borderColor: "red",
            background: "iage" //or image
          }}
          nameStyle={{ size: 20, color: "green", x: "right", y: "top" }}
          labelStyle={{ show: true, size: 10, color: "red" }}
        />
      </div>
    );
  }
}
