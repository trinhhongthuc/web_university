import React from "react";

const Heading = ({ heading, color, fontSize, outLine }) => {
  return (
    <>
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

      {outLine && outLine ? (
        <div
          style={{
            width: "200px",
            height: "5px",
            backgroundColor: color,
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: "24px",
          }}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Heading;
