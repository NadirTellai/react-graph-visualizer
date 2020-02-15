# react-graph-visualizer

> a react component to visualize interactive directed and weighted graphs easily.

[![NPM](https://img.shields.io/npm/v/react-graph-visualizer.svg)](https://www.npmjs.com/package/react-graph-visualizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-graph-visualizer
```

## Examples

### 1. Demo

the **Demo**contains five code examples with their results.

### 2. The debt settler app

![Alt Text](http://g.recordit.co/oYkr6UFdhR.gif)

the [**Debt settler**](https://debt-settler-app.herokuapp.com/) is react app made using the react-graph-visualizer.

## Usage

```jsx
import React, { useState, useRef } from "react";
import Graph from "react-graph-visualizer";

function App() {
  const graphRef = useRef();
  const [graph, setGraph] = useState({
    nodes: [
      {
        name: "A",
        id: 1
      },
      {
        name: "B",
        id: 2
      }
    ],
    links: [
      {
        source: 1,
        target: 2,
        label: "A-B"
      }
    ]
  });
  return (
    <Graph
      ref={graphRef}
      initialGraph={graph}
      width={850}
      height={450}
      backgroundColor={"white"}
    />
  );
}

export default App;
```

to change the graph data call the function **setGraph** as follow.

```jsx
graphRef.current.setGraph(newGraphData);
```

## API

| Prop                      | Type       | Default               | Description                                                               |
| :------------------------ | :--------- | :-------------------- | :------------------------------------------------------------------------ |
| **id**                    | string     | /                     | component id, required when using multiple component in the same page.    |
| **initialGraph**          | object     | `{nodes:[],links:[]}` | Graph initial data                                                        |
| **initialGraph.nodes**    | Array      | []                    | The nodes array of objects `{name:string, id:number, img=string}`         |
| **initialGraph.links**    | Array      | []                    | The links array of objects `{source:number, target:number, label:string}` |
| **width**                 | number     | 700                   | the vertical length of the component.                                     |
| **height**                | number     | 500                   | the horizontal length of the component.                                   |
| **ref**                   | Ref object | /                     | The ref object to use to change graph data.                               |
| **backgroundColor**       | string     | #e5e6e7               | The component background color.                                           |
| **linkStyle.directed**    | boolean    | true                  | Specifies the type of the graph, directed or undirected.                  |
| **linkStyle.distance**    | number     | 300                   | The length of the links, or the distance between the nodes.               |
| **linkStyle.color**       | string     | black                 | Links color: "red", "orange", "#000", "#e5e6e7"                           |
| **nodeStyle.radius**      | number     | 30                    | The radius of nodes.                                                      |
| **nodeStyle.borderWidth** | number     | 0                     | The width of the nodes borders.                                           |
| **nodeStyle.borderColor** | string     | black                 | The color of the nodes border.                                            |
| **nodeStyle.background**  | string     | black                 | The color of the nodes background.                                        |
| **nameStyle.size**        | number     | 20                    | The size of the nodes name.                                               |
| **nameStyle.color**       | string     | black                 | The nodes name color                                                      |
| **nameStyle.x**           | string     | center                | The horizontal position of the nodes name: left, right, center.           |
| **nameStyle.y**           | string     | bottom                | The vertical position of the nodes name: bottom, top.                     |
| **labelStyle.show**       | boolean    | false                 | Show or hide labels.                                                      |
| **labelStyle.size**       | number     | 10                    | The size of the labels.                                                   |
| **labelStyle.color**      | string     | black                 | The color of the labels                                                   |

## Contribution

1. `npm install`
2. `cd example && npm install`
3. `npm start`
4. `cd example && npm start`in a diffrent terminal.

## License

MIT © [NadirTellai](https://github.com/NadirTellai)
