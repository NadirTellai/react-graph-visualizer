import React, { useState } from "react";
import "./codeAndData.css";
import { Code } from "./code";
import { Data } from "./data";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeAndData = props => {
  const [codeChecked, setCodeChecked] = useState(false);
  const [dataChecked, setDataChecked] = useState(false);

  const handleClick = e => {
    // alert(e.target.name + e.target.checked);

    if (e.target.name == "code") {
      if (!e.target.checked) {
        setCodeChecked(false);
      } else setCodeChecked(true);
      if (dataChecked) setDataChecked(false);
    }
    if (e.target.name == "data") {
      if (!e.target.checked) setDataChecked(false);
      else setDataChecked(true);
    }
    if (codeChecked) setCodeChecked(false);
  };

  return (
    <div className="codeContainer">
      <div className="buttons">
        <input
          type="checkbox"
          name="code"
          id={"code" + props.component}
          checked={codeChecked}
          onChange={handleClick}
        />
        <label for={"code" + props.component}>
          <i className="fa fa-code" aria-hidden="true"></i>
          <span>Code</span>
        </label>
        <input
          type="checkbox"
          name="data"
          id={"data" + props.component}
          checked={dataChecked}
          onChange={handleClick}
        />
        <label for={"data" + props.component}>
          <i class="fa fa-database" aria-hidden="true"></i>
          <span>Data</span>
        </label>
      </div>
      {codeChecked && (
        <div className="code">
          <SyntaxHighlighter
            showLineNumbers={true}
            language="javascript"
            style={darcula}
          >
            {Code(props.component)}
          </SyntaxHighlighter>
        </div>
      )}
      {dataChecked && (
        <div className="code">
          <SyntaxHighlighter language="javascript" style={darcula}>
            {Data(props.component)}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default CodeAndData;
