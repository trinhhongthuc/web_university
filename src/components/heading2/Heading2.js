import React from "react";

const Heading2 = ({ title }) => {
  const style = {
    fontSize: "28px",
    color: "#29166f",
    borderLeft: "5px solid #29166f",
    padding: "8px",
    textTransform: "uppercase",
  };

  return (
    <h2 className="heading2" style={style}>
      {title}
    </h2>
  );
};

export default Heading2;
