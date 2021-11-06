import React from "react";
import Container from "@mui/material/Container";
import bgHeading from "../../assets/image/bg-heading3.jpg";
const Heading3 = ({ title, note }) => {
  return (
    <div
      className="heading3"
      style={{
        backgroundImage: "url(" + bgHeading + ")",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="row">
          <div className="col-xl-12 heading3-center">
            <h1 className="headding3-title">{title}</h1>
            <p className="headding3-note mt-3 mb-3">{note}</p>
            <div className="border-bottom mt-3"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Heading3;
