import React, { Component } from "react";
import Graph from "react-graph-visualizer";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="componentExample">
          <Graph
            initialGraph={{
              nodes: [
                {
                  name: "Node A",
                  id: 1
                },
                {
                  name: "Node B",
                  id: 2
                },
                {
                  name: "Node C",
                  id: 3
                },
                {
                  name: "Node D",
                  id: 4
                }
              ],
              links: [
                {
                  source: 1,
                  target: 2,
                  label: "A - b"
                },
                {
                  source: 1,
                  target: 3,
                  label: "A - C"
                },

                {
                  source: 3,
                  target: 4,
                  label: "C - D"
                }
              ]
            }}
            width={500}
            id="pppz"
            height={300}
            backgroundColor={"#e5e6e7"}
            linkStyle={{ directed: true, distance: 300, color: "black" }}
            nodeStyle={{
              radius: 10,
              borderWidth: 2,
              borderColor: "black",
              background: "black"
            }}
            nameStyle={{ size: 15, color: "black", x: "right", y: "bottom" }}
            labelStyle={{ show: true, size: 10, color: "black" }}
          />
        </div>

        <div className="componentExample">
          <Graph
            initialGraph={{
              nodes: [
                {
                  name: "Node A",
                  id: 1
                },
                {
                  name: "Node B",
                  id: 2
                },
                {
                  name: "Node C",
                  id: 3
                },
                {
                  name: "Node D",
                  id: 4
                }
              ],
              links: [
                {
                  source: 1,
                  target: 2,
                  label: "A - b"
                },
                {
                  source: 1,
                  target: 3,
                  label: "A - C"
                },

                {
                  source: 3,
                  target: 4,
                  label: "C - D"
                }
              ]
            }}
            width={500}
            id="qsdqds"
            height={300}
            backgroundColor={"#e5e6e7"}
            linkStyle={{ directed: true, distance: 300, color: "black" }}
            nodeStyle={{
              radius: 20,
              borderWidth: 2,
              borderColor: "black",
              background: "black"
            }}
            nameStyle={{ size: 15, color: "black", x: "right", y: "bottom" }}
            labelStyle={{ show: true, size: 10, color: "black" }}
          />
        </div>
      </div>
    );
  }
}
