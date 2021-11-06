import React, { useEffect } from "react";
import EventNow from "./../eventNow/EventNow";
// import { Container } from "@material-ui/core";
import Container from "@mui/material/Container";
import HighlightVideo from "./../highlightVideo/HighlightVideo";
import AOS from "aos";

const Event = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="event" data-aos="fade-up" data-aos-duration="1000">
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
