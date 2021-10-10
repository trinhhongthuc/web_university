import React from "react";
import EventNow from "./../eventNow/EventNow";
// import { Container } from "@material-ui/core";
import Container from "@mui/material/Container";
import HighlightVideo from "./../highlightVideo/HighlightVideo";

const Event = () => {
  return (
    <div className="event">
      <Container>
        <div className="row">
          <EventNow />
          <HighlightVideo />
        </div>
      </Container>
    </div>
  );
};

export default Event;
