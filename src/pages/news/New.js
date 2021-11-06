import React, { useEffect } from "react";
import Heading3 from "../../components/heading3/Heading3";
import Container from "@mui/material/Container";
import BoxNews from "../../components/boxNews/BoxNews";
import Heading2 from "../../components/heading2/Heading2";
import NewTopSection from "./NewTopSection";
import BodyNewSection from "./BodyNewSection";
import AOS from "aos";

const New = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="new" style={{ marginTop: "89px" }}>
        <Heading3
          data-aos="fade-up"
          data-aos-duration="1000"
          title="Tin Tức"
          note="Tin tức, tiêu điểm của DHDN Phân hiệu Kon Tum"
        />

        <NewTopSection></NewTopSection>
        <BodyNewSection></BodyNewSection>
      </section>
    </>
  );
};

export default New;
