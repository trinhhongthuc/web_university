import React from "react";

const Heading = ({ heading, color, fontSize }) => {
  return (
    <h1
      className="heading"
      style={{
        color: color,
        fontSize: fontSize,
        textTransform: "uppercase",
        display: "block",
        textAlign: "center",
        padding: "12px 10px",
      }}
    >
      {heading}
    </h1>
  );
};

export default Heading;
