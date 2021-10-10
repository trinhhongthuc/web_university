import React from "react";
import Header from "./../../components/header/Header";
import Banner from "./../../components/banner/Banner";
import ContactLive from "./../../components/contactLive/ContactLive";
import { Training } from "./../../components/training/Training";
import Heading from "./../../components/heading/Heading";
import BoxNews from "./../../components/boxNews/BoxNews";
import Event from "../../components/event/Event";
import WorkingStudent from "./../../components/wokingStudent/WorkingStudent";
import Location from "../../components/location/Location";
import Footer from "./../../components/footer/Footer";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ContactLive />
      <Training />
      <Container>
        <div className="col-xl-12">
          <Heading
            heading="Tin Tức "
            color="#2b2666"
            fontSize="30px"
            outLine={true}
          />
        </div>
      </Container>
      <Container>
        <div className="row">
          <BoxNews />
          <BoxNews />
          <BoxNews />
          <BoxNews />
          <BoxNews />
          <BoxNews />
        </div>
      </Container>
      <Event />
      <WorkingStudent />

      <Location />
      <Footer />
    </>
  );
};

export default Home;
