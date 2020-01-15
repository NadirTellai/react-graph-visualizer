var code = {
  one: `
  import React, { Component } from "react";
  import Graph from "react-graph-visualizer";

  const App = () => {
    return ( 
    <Graph
      initialGraph={graphData}
      width={500}
      height={300}
      linkStyle={{ directed: false }}
    /> 
    );
  }
   
  export default App;
  `,
  two: `
  import React, { Component } from "react";
  import Graph from "react-graph-visualizer";

  const App = () => {
    return ( 
    <Graph
      initialGraph={graphData}
      width={500}
      height={300}
      labelStyle={{ show: true }}
    /> 
    );
  }
   
  export default App;
  `,
  three: `
  import React, { Component } from "react";
  import Graph from "react-graph-visualizer";

  const App = () => {
    return ( 
    <Graph
      initialGraph={graphData}
      width={500}
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
    );
  }
   
  export default App;
  `,
  four: `
  import React, { useRef } from "react";
  import Graph from "react-graph-visualizer";

  const App = () => {
    const graphRef = useRef();
    return ( 
  <button 
      <Graph
      ref={graphRef}
      initialGraph={graphData}
      width={500}
      height={300}
      nodeStyle={{
        borderWidth: 2,
        borderColor: "black",
        background: "image"
      }}
    /> 
    );
  }
   
  export default App;
  `,
  five: `
  import React, { Component } from "react";
  import Graph from "react-graph-visualizer";

  const App = () => {
    return ( 
    <div>
      <button onClick={()=>graphRef.current.setGraph(anotherGraphData)}>Add Node</button>
      <button onClick={()=>graphRef.current.setGraph(graphData)}>Remove Node</button>
      <Graph
        initialGraph={graphData}
        width={500}
        height={300}
        linkStyle={{ directed: false }}
      /> 
    </div>
    );
  }
   
  export default App;
  `
};

export const Code = component => {
  return code[component];
};
