import React, { Component } from "react";
import Graph from "react-graph-visualizer";
import "./app.css";
import CodeAndData from "./codeAndData/codeAndData.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.graphRef = React.createRef();
    this.addNode = this.addNode.bind(this);
    this.removeNode = this.removeNode.bind(this);
  }

  addNode() {
    this.graphRef.current.setGraph({
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
        },
        {
          name: "Node E",
          id: 5
        }
      ],
      links: [
        {
          source: 1,
          target: 2
        },
        {
          source: 1,
          target: 3
        },

        {
          source: 3,
          target: 4
        },
        {
          source: 5,
          target: 4
        }
      ]
    });
  }

  removeNode() {
    this.graphRef.current.setGraph({
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
    });
  }
  render() {
    return (
      <div className="container">
        <h1>React graph visualizer Demo </h1>
        <div className="componentExample">
          <h2 className="comp-title">1. Undirected unweighted graph</h2>

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
          />
          <CodeAndData component="one" />
        </div>
        <div className="componentExample">
          <h2 className="comp-title">2. Directed weighted graph</h2>

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
            id="two"
            height={300}
            labelStyle={{ show: true }}
          />
          <CodeAndData component="two" />
        </div>
        <div className="componentExample">
          <h2 className="comp-title">3. Customizable style</h2>

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
            linkStyle={{ directed: false, distance: 150, color: "green" }}
            nodeStyle={{
              radius: 15,
              borderWidth: 2,
              borderColor: "orange",
              background: "red"
            }}
            nameStyle={{ size: 13, color: "brown", x: "right", y: "top" }}
            labelStyle={{ show: true, size: 15, color: "orange" }}
          />
          <CodeAndData component="three" />
        </div>
        <div className="componentExample">
          <h2 className="comp-title">4. Nodes with images</h2>

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
            nodeStyle={{
              borderWidth: 2,
              borderColor: "black",
              background: "image"
            }}
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
        <div className="componentExample">
          <h2 className="comp-title">5. Dynamic graph</h2>

          <div className="btn" onClick={this.addNode}>
            Add node
          </div>
          <div className="btn" onClick={this.removeNode}>
            Remove node
          </div>

          <Graph
            ref={this.graphRef}
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
            id="five"
            height={300}
          />
          <CodeAndData component="five" />
        </div>
      </div>
    );
  }
}
