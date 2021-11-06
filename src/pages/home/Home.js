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
      title: "Xét tuyển bổ xung theo phương thức xét điểm thi THPT 2021",
      date: "06/10/2021",
      description:
        "Đại học Đà Nẵng chính thức thông báo xét tuyển đợt bổ sung theo kết quả thi THPT năm 2021 vào Phân hiệu ĐHĐN tại Kon Tum với 08 ngành đào tạo:",
    },

    {
      img: hometin5,
      title: "Cuộc thi Tìm kiếm ý tưởng khởi nghiệp",
      date: "06/10/2021",
      description:
        "Loa! Loa! Cơ hội cho UDCKers thỏa sức thực hiện ước mơ khởi nghiệp, kinh doanh ngay trên ghế giảng đường đến rồi đây! Bắt tay lên ý tưởng thôi nào!",
    },

    {
      img: hometin6,
      title: "Giới thiệu sách Những đòn tâm lý trong thuyết phục",
      date: "06/10/2021",
      description:
        "6 “vũ khí” gây ảnh hưởng hiệu quả được các chuyên gia thuyết phục hàng đầu sử dụng của tác giả Robert B.Cialdini",
    },
    {
      img: hometin1,
      title: "Đại Học Đà nẵng tuyển sinh thạc sĩ năm 2021",
      date: "26/09/2021",
      description:
        "Bạn đã tốt nghiệp Đại học, bạn đang công tác tại các cơ quan, trường học, các đơn vị hành chính sự nghiệp, các doanh nghiệp,",
    },

    {
      img: hometin2,
      title: "Đại Học Đà nẵng tuyển sinh hệ vừa học vừa làm 2021",
      date: "25/09/2021",
      description:
        "UD-CK - Phân hiệu Đại học Đà Nẵng tại Kon Tum hiện đang tổ chức tuyển sinh các lớp hệ VLVH khối ngành Kinh tế - Quản lý, Kỹ thuật; Luật gồm các",
    },

    {
      img: hometin3,
      title: "HỌC BẠ TỐT – “CHỐT ĐƠN” VÀO ĐẠI HỌC",
      date: "24/09/2021",
      description:
        "Phân hiệu ĐHĐN tại Kon Tum vẫn đang tiếp tục nhận hồ sơ xét học bạ với 07 ngành đào tạo",
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
                          Nhiều ngành học tại Đại học đà nẵng đảm bảo sinh viên
                          100% có việc làm sau tốt nghiệp{" "}
                        </a>
                      </h1>
                      <span className="mt-2" style={{ display: "block" }}>
                        22/10/2021
                      </span>
                      <p style={{ marginTop: "15px" }}>
                        Ít ai ngờ rằng những ngành học một vài năm trước đây bị
                        gắn mác “khó tìm việc” bất ngờ lại trở nên khan hiếm
                        nhân lực đến vậy hiện nay. Nguyên nhân có lẽ bắt nguồn
                        từ việc trong một thời gian ngắn các trường đại học đã
                        đào tạo ồ ạt với số lượng lớn khiến nhân lực các ngành
                        này trở nên dư thừa, sinh viên tốt nghiệp luôn đứng
                        trước nguy cơ thất nghiệp hoặc phải làm việc trái nghề
                        đã đẩy các thí sinh chạy theo các ngành học mới, được
                        xem là dễ mà “hot” hơn trong những mùa tuyển sinh gần
                        đây.{" "}
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
