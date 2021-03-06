import React, { useEffect, useState } from "react";
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
import Heading2 from "../../components/heading2/Heading2";
import img5 from "../../assets/image/tuyensinh-01.png";
import sl1 from "../../assets/image/sl1.jpg";
import sl2 from "../../assets/image/sl2.jpg";
import sl3 from "../../assets/image/sl3.jpg";
import sl4 from "../../assets/image/sl4.jpg";
import vl1 from "../../assets/image/vl1.jpg";
import hometin1 from "../../assets/image/hometin1.jpg";
import hometin2 from "../../assets/image/hometin2.jpg";
import hometin3 from "../../assets/image/hometin3.jpg";
import hometin4 from "../../assets/image/hometin4.jpg";
import hometin5 from "../../assets/image/hometin5.jpg";
import hometin6 from "../../assets/image/hometin6.jpg";
import bnbottom1 from "../../assets/image/bnbottom1.jpg";
import bg from "../../assets/image/background_decorate_01.png";
import { ReactComponent as Bnbottom2 } from "../../assets/image/bnbottom2.svg";
import { ReactComponent as Bnbottom3 } from "../../assets/image/bnbottom3.svg";
import { ReactComponent as Bnbottom4 } from "../../assets/image/bnbottom4.svg";
import { ReactComponent as Bnbottom5 } from "../../assets/image/bnbottom5.svg";
import { ReactComponent as Bnbottom6 } from "../../assets/image/bntbottom6.svg";
import { ReactComponent as Bnbottom7 } from "../../assets/image/bntbottom7.svg";
import AOS from "aos";
import Welcome from "../../components/welcome/Welcome";
const Home = ({ setShowNow, showNow }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const dataHomeTin = [
    {
      img: hometin4,
      title: "X??t tuy???n b??? xung theo ph????ng th???c x??t ??i???m thi THPT 2021",
      date: "06/10/2021",
      description:
        "??a??i ho??c ??a?? N????ng ch??nh th???c th??ng b??o x??t tuy???n ?????t b??? sung theo k???t qu??? thi THPT n??m 2021 v??o Ph??n hi???u ??H??N t???i Kon Tum v???i 08 ng??nh ????o t???o:",
    },

    {
      img: hometin5,
      title: "Cu???c thi T??m ki???m ?? t?????ng kh???i nghi???p",
      date: "06/10/2021",
      description:
        "Loa! Loa! C?? h???i cho UDCKers th???a s???c th???c hi???n ?????c m?? kh???i nghi???p, kinh doanh ngay tr??n gh??? gi???ng ???????ng ?????n r???i ????y! B???t tay l??n ?? t?????ng th??i n??o!",
    },

    {
      img: hometin6,
      title: "Gi???i thi???u s??ch Nh???ng ????n t??m l?? trong thuy???t ph???c",
      date: "06/10/2021",
      description:
        "6 ???v?? kh????? g??y ???nh h?????ng hi???u qu??? ???????c c??c chuy??n gia thuy???t ph???c h??ng ?????u s??? d???ng c???a t??c gi??? Robert B.Cialdini",
    },
    {
      img: hometin1,
      title: "?????i H???c ???? n???ng tuy???n sinh th???c s?? n??m 2021",
      date: "26/09/2021",
      description:
        "B???n ???? t???t nghi???p ?????i h???c, b???n ??ang c??ng t??c t???i c??c c?? quan, tr?????ng h???c, c??c ????n v??? h??nh ch??nh s??? nghi???p, c??c doanh nghi???p,",
    },

    {
      img: hometin2,
      title: "?????i H???c ???? n???ng tuy???n sinh h??? v???a h???c v???a l??m 2021",
      date: "25/09/2021",
      description:
        "UD-CK - Ph??n hi???u ?????i h???c ???? N???ng t???i Kon Tum hi???n ??ang t??? ch???c tuy???n sinh c??c l???p h??? VLVH kh???i ng??nh Kinh t??? - Qu???n l??, K??? thu???t; Lu???t g???m c??c",
    },

    {
      img: hometin3,
      title: "H???C B??? T???T ??? ???CH???T ????N??? V??O ?????I H???C",
      date: "24/09/2021",
      description:
        "Ph??n hi???u ??H??N t???i Kon Tum v???n ??ang ti???p t???c nh???n h??? s?? x??t h???c b??? v???i 07 ng??nh ????o t???o",
    },
  ];
  return (
    <>
      <section className="home" style={{ marginTop: "90px" }}>
        <Banner />
        <ContactLive />
        <Training />
        <Event />
        <WorkingStudent />

        <section
          className="main_module3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Container>
            <div className="row">
              <div className="sum_col">
                <div className="box_left_m3 float_col">
                  <div
                    className="col_chil_box1"
                    style={{
                      height: "auto",
                    }}
                  >
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transition: "all 0s ease 0s",
                          width: "2385px",
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "216.762px" }}
                        >
                          <figure>
                            <a href="#" target="_blank" className="item">
                              <img
                                src={sl1}
                                alt="daa"
                                style={{ height: "156px" }}
                              />
                            </a>
                          </figure>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "216.762px" }}
                        >
                          <figure>
                            <a href="#" target="_blank" className="item">
                              <img
                                src={sl2}
                                alt="daa"
                                style={{ height: "156px" }}
                              />
                            </a>
                          </figure>
                        </div>

                        <div
                          className="owl-item"
                          style={{ width: "216.762px" }}
                        >
                          <figure>
                            <a href="#" target="_blank" className="item">
                              <img
                                src={sl3}
                                alt="daa"
                                style={{ height: "156px" }}
                              />
                            </a>
                          </figure>
                        </div>

                        <div
                          className="owl-item"
                          style={{ width: "216.762px" }}
                        >
                          <figure>
                            <a href="#" target="_blank" className="item">
                              <img
                                src={sl4}
                                alt="daa"
                                style={{ height: "156px" }}
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col_chil_box2">
                    <figure>
                      <a href="#">
                        <img
                          src={vl1}
                          alt="daa"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </a>
                    </figure>
                    <div className="info_news_left">
                      <h1>
                        <a href="#">
                          Nhi???u ng??nh h???c t???i ?????i h???c ???? n???ng ?????m b???o sinh vi??n
                          100% c?? vi???c l??m sau t???t nghi???p{" "}
                        </a>
                      </h1>
                      <span className="mt-2" style={{ display: "block" }}>
                        22/10/2021
                      </span>
                      <p style={{ marginTop: "15px" }}>
                        ??t ai ng??? r???ng nh???ng ng??nh h???c m???t v??i n??m tr?????c ????y b???
                        g???n m??c ???kh?? t??m vi???c??? b???t ng??? l???i tr??? n??n khan hi???m
                        nh??n l???c ?????n v???y hi???n nay. Nguy??n nh??n c?? l??? b???t ngu???n
                        t??? vi???c trong m???t th???i gian ng???n c??c tr?????ng ?????i h???c ????
                        ????o t???o ??? ???t v???i s??? l?????ng l???n khi???n nh??n l???c c??c ng??nh
                        n??y tr??? n??n d?? th???a, sinh vi??n t???t nghi???p lu??n ?????ng
                        tr?????c nguy c?? th???t nghi???p ho???c ph???i l??m vi???c tr??i ngh???
                        ???? ?????y c??c th?? sinh ch???y theo c??c ng??nh h???c m???i, ???????c
                        xem l?? d??? m?? ???hot??? h??n trong nh???ng m??a tuy???n sinh g???n
                        ????y.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box_right_m3 float_col">
                  {dataHomeTin &&
                    dataHomeTin.map((item, index) => {
                      return (
                        <div className="box_show_news_right" key={index}>
                          <figure>
                            <a href="#">
                              <img
                                src={item.img}
                                alt="daa"
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </figure>
                          <h3>
                            <a href="#">{item.title}</a>
                          </h3>
                          <span>{item.date}</span>
                          <p>
                            {item.description.length > 50
                              ? item.description.slice(0, 50) + " ..."
                              : item.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* ////////////////////// *==============================================================*/}
        <section
          className="main_module4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Container>
            <div className="row">
              <div className="sum_col">
                <div
                  className="sum_adv_01 float_col"
                  style={{
                    display: "flex",
                  }}
                >
                  <div className="" style={{ paddingRight: "6px" }}>
                    <div
                      className="owl-item animated owl-animated-in none active"
                      style={{ width: "485.325px", height: "200px" }}
                    >
                      <a href="#" target="_blank" className="item">
                        <img
                          src={bnbottom1}
                          alt="daa"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="" style={{ paddingRight: "6px" }}>
                    <div
                      className="owl-item"
                      style={{ width: "100%", height: "200px" }}
                    >
                      <a href="#" className="item">
                        <img
                          src={img5}
                          alt="daa"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sum_adv_02 float_col">
                  <figure
                    style={{
                      height: "97px",
                      width: "100%",
                      marginBottom: "6px",
                    }}
                  >
                    <a href="#" target="_blank" className="item">
                      <Bnbottom2 />
                      <Bnbottom3 />
                      <Bnbottom4 />
                    </a>
                  </figure>
                  <figure style={{ height: "97px", width: "100%" }}>
                    <a href="#" target="_blank" className="item">
                      <Bnbottom5 />
                      <Bnbottom6 />
                      <Bnbottom7 />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <Location />
      </section>
    </>
  );
};

export default Home;
