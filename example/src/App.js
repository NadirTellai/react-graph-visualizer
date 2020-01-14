import React, { Component } from "react";
import Graph from "react-graph-visualizer";
import "./app.css";
import img1 from "./images/1.png";

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
            linkStyle={{ directed: false, distance: 300, color: "black" }}
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
            nameStyle={{ size: 15, color: "black", x: "left", y: "top" }}
            labelStyle={{ show: false, size: 10, color: "black" }}
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
        </div>

        <div className="componentExample">
          <Graph
            initialGraph={{
              nodes: [
                {
                  name: "Node A",
                  id: 1,
                  img: img1
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
            nameStyle={{ size: 15, color: "black", x: "left", y: "top" }}
            labelStyle={{ show: false, size: 10, color: "black" }}
          />
        </div>
      </div>
    );
  }
}
