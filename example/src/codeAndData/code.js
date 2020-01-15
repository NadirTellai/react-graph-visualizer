var code = {
  one: `<Graph
  initialGraph={}
  width={500}
  id="pppz"
  height= {300}
  backgroundColor={"#e5e6e7"}
  linkStyle= {{ directed: false, distance: 300, color: "black" }}
  nodeStyle={{
    radius: 10,
    borderWidth: 2,
    borderColor: "black",
    background: "black"
  }}
  nameStyle={{ size: 15, color: "black", x: "right", y: "bottom" }}
  labelStyle={{ show: true, size: 10, color: "black" }}
/>`,
  two: `<Graph
initialGraph={}
width={500}
id="pppz"
height= {300}
backgroundColor={"#e5e6e7"}
linkStyle= {{ directed: false, distance: 300, color: "black" }}
nodeStyle={{
  radius: 10,
  borderWidth: 2,
  borderColor: "black",
  background: "black"
}}
nameStyle={{ size: 15, color: "black", x: "right", y: "bottom" }}
labelStyle={{ show: true, size: 10, color: "black" }}
/>`
};

export const Code = component => {
  return code[component];
};
