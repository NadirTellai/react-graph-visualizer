import React, { Component } from "react";
import Graph from "react-graph-visualizer";
import "./app.css";
import CodeAndData from "./codeAndData/codeAndData.js";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React graph visualizer </h1>
        <div className="componentExample">
          <h2 className="comp-title">Undirected weighted graph</h2>

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
            id="one"
            height={300}
            linkStyle={{ directed: false }}
            labelStyle={{ show: true }}
          />
          <CodeAndData component="one" />
        </div>

        <div className="componentExample">
          <h2 className="comp-title">Directed unweighted graph</h2>

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
            nameStyle={{ size: 15, color: "black", x: "left", y: "top" }}
            labelStyle={{ show: false, size: 10, color: "black" }}
          />
          <CodeAndData component="two" />
        </div>

        <div className="componentExample">
          <h2 className="comp-title">Customizable style</h2>

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
            id="three"
            height={300}
            backgroundColor={"grey"}
            linkStyle={{ directed: true, distance: 300, color: "green" }}
            nodeStyle={{
              radius: 20,
              borderWidth: 2,
              borderColor: "black",
              background: "red"
            }}
            nameStyle={{ size: 15, color: "brown", x: "center", y: "top" }}
            labelStyle={{ show: true, size: 10, color: "orange" }}
          />
          <CodeAndData component="three" />
        </div>

        <div className="componentExample">
          <h2 className="comp-title">Nodes with images</h2>

          <Graph
            initialGraph={{
              nodes: [
                {
                  name: "Node A",
                  id: 1,
                  img: "https://i.imgur.com/epYTzoC.png"
                },
                {
                  name: "Node B",
                  id: 2,
                  img: "https://i.imgur.com/2znXJH4.png"
                },
                {
                  name: "Node C",
                  id: 3,
                  img: "https://i.imgur.com/6NzAlPR.png"
                },
                {
                  name: "Node D",
                  id: 4,
                  img: "https://i.imgur.com/F2pjuvV.png"
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
            id="four"
            height={300}
            backgroundColor={"#e5e6e7"}
            linkStyle={{ directed: true, distance: 300, color: "black" }}
            nodeStyle={{
              radius: 20,
              borderWidth: 2,
              borderColor: "black",
              background: "image"
            }}
            nameStyle={{ size: 15, color: "black", x: "center", y: "bottom" }}
            labelStyle={{ show: false, size: 10, color: "black" }}
          />
          <div className="credit">
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <CodeAndData component="four" />
        </div>
      </div>
    );
  }
}
