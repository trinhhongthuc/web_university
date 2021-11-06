import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Heading from "./../heading/Heading";
import AOS from "aos";

const Location = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="location"
        style={{
          backgroundColor: "#f5f5f5",
          marginTop: "30px",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Container>
          <div className="row">
            <div className="col-xl-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.1207738807375!2d107.99751621476388!3d14.362421889954557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316bff07edafba09%3A0xc5aba7cad4174e8e!2zUGjDom4gSGnhu4d1IMSQ4bqhaSBI4buNYyDEkMOgIE7hurVuZyBU4bqhaSBLb24gVHVt!5e0!3m2!1svi!2s!4v1633768352556!5m2!1svi!2s"
                style={{
                  border: 0,
                  width: "100%",
                  height: "450px",
                  margin: "30px 0",
                }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Location;
