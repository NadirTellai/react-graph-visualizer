import React from "react";

const Data = props => {
  switch (props.component) {
    case "one":
      return <div>data one</div>;
    case "two":
      return <div>data two</div>;
  }
};

export default Data;
