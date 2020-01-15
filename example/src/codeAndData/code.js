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
      labelStyle={{ show: true }}
    /> 
    );
  }
   
  export default App;
  `
};

export const Code = component => {
  return code[component];
};
