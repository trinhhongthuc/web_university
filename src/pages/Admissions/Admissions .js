import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/xethocba-3848.png";
import img2 from "../../assets/image/xettuyenthang-1899.png";
import img3 from "../../assets/image/xetkq-3046.png";
import img4 from "../../assets/image/tracuu-8762.png";
import img5 from "../../assets/image/tuyensinh-01.png";
import img6 from "../../assets/image/hocbong-6243.png";
import img7 from "../../assets/image/cosovatchat-4444.png";
import img8 from "../../assets/image/kytucxa-318.png";
import vhvl from "../../assets/image/ts1.png";
import lt from "../../assets/image/lt.jpg";
import sl1 from "../../assets/image/sl1.jpg";
import sl2 from "../../assets/image/sl2.jpg";
import sl3 from "../../assets/image/sl3.jpg";
import sl4 from "../../assets/image/sl4.jpg";
import sl5 from "../../assets/image/sl5.jpg";
import sl6 from "../../assets/image/sl6.jpg";
import sl7 from "../../assets/image/sl7.jpg";
import sl8 from "../../assets/image/sl8.jpg";
import dh from "../../assets/image/banner/banner_1.jpg";
import sdh from "../../assets/image/banner/banner_3.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Banner from "./../../components/banner/Banner";
import AOS from "aos";

const Admissions = () => {
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
      <div className="education" style={{ paddingTop: "90px" }}>
        <Banner></Banner>

        <section
          className="tracuu mt-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="tracuu-desktop">
              <div className="row">
                <div className="col-md-3 padding-left-15-mobile">
                  <Link to="#" className="img">
                    <img src={img1} alt="123" />
                  </Link>
                </div>
                <div className="col-md-3 padding-right-15-mobile">
                  <Link to="#">
                    <img src={img2} alt="1234" />
                  </Link>
                </div>
                <div className="col-md-3 padding-left-15-mobile">
                  <Link to="#">
                    <img src={img3} alt="1235" />
                  </Link>
                </div>
                <div className="col-md-3 padding-right-15-mobile">
                  <Link to="#" className="img">
                    <img src={img4} alt="1236" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="tuyensinh-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row tuyensinh-desktop">
              <div className="col-md-6 d-flex">
                <div className="d-flex">
                  <div className="d-flex">
                    <img
                      src={img5}
                      alt={img5}
                      style={{ objectFit: "cover", width: "100%" }}
                    />
                  </div>
                  <div className="tuyensinh-bg">
                    <p className="text-hl text-sm">TH??NG TIN TUY???N SINH 2021</p>
                    <ul className="tuyensinh-text">
                      <li>
                        <Link
                          to="#"
                          title="Th??ng tin Tuy???n sinh ?????i h???c n??m 2021"
                        >
                          Th??ng tin Tuy???n sinh ?????i h???c n??m 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Th??ng b??o ??i???m chu???n ?????i h???c 2021">
                          Th??ng b??o ??i???m chu???n ?????i h???c 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Quy tr??nh ????ng k??">
                          Quy tr??nh ????ng k??
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Th??? t???c Nh???p h???c">
                          Th??? t???c Nh???p h???c
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="H???c ph?? 2021 - 2022">
                          H???c ph?? 2021 - 2022
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Ch??nh s??ch ??u ti??n">
                          Ch??nh s??ch ??u ti??n
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Tuy???n sinh ng??nh Gi??o d???c ti???u h???c">
                          Tuy???n sinh ng??nh Gi??o d???c ti???u h???c
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="?????i t?????ng Tuy???n sinh">
                          ?????i t?????ng Tuy???n sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Ch??? ti??u Tuy???n Sinh">
                          Ch??? ti??u Tuy???n Sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#">QUY ?????NH &amp; BI???U M???U</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className>
                  <Link to="#">
                    <img src={img7} alt={img7} width="100%" />
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row padding-bottom-15">
                  <div className="col-md-12">
                    <div className>
                      <Link to="#">
                        <img src={img6} alt={img6} width="100%" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row padding-bottom-15">
                  <div className="col-md-12">
                    <div className>
                      <Link to="#" target="_blank">
                        <img src={img8} alt={img8} width="100%" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row tuyensinh-mobile">
              <div className="col-md-12">
                <div className>
                  <div className="tuyensinh-bg">
                    <p className="text-hl text-sm">TH??NG TIN TUY???N SINH 2021</p>
                    <ul className="tuyensinh-text">
                      <li>
                        <Link
                          to="#"
                          title="Th??ng tin Tuy???n sinh ?????i h???c n??m 2021"
                        >
                          Th??ng tin Tuy???n sinh ?????i h???c n??m 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Th??ng b??o ??i???m chu???n ?????i h???c 2021">
                          Th??ng b??o ??i???m chu???n ?????i h???c 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Quy tr??nh ????ng k??">
                          Quy tr??nh ????ng k??
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Th??? t???c Nh???p h???c">
                          Th??? t???c Nh???p h???c
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="H???c ph?? 2021 - 2022">
                          H???c ph?? 2021 - 2022
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Ch??nh s??ch ??u ti??n">
                          Ch??nh s??ch ??u ti??n
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Thi tuy???n ng??nh Ki???n tr??c">
                          Thi tuy???n ng??nh Ki???n tr??c
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="?????i t?????ng Tuy???n sinh">
                          ?????i t?????ng Tuy???n sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Ch??? ti??u Tuy???n Sinh">
                          Ch??? ti??u Tuy???n Sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#">QUY ?????NH &amp; BI???U M???U</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="coso owl-carousel owl-theme coso-carousel bottom owl-loaded owl-responsive-1200 owl-hidden">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-300px, 0px, 0px)",
                        transition: "all 1s ease 0s",
                        width: "700px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "100px", marginRight: "0px" }}
                      >
                        <div className="item">
                          <Link to="#">
                            <img src={img6} alt={img6} width="100%" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "100px", marginRight: "0px" }}
                      >
                        <div className="item">
                          <Link to="#" target="_blank">
                            <img src={img7} alt={img7} />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "100px", marginRight: "0px" }}
                      >
                        <div className="item">
                          <Link to="#">
                            <img src={img8} alt={img8} />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "100px", marginRight: "0px" }}
                      >
                        <div className="item">
                          <Link to="#">
                            <img
                              src="/tuyen-sinh/Upload/banner/hocbong-6243.png"
                              width="100%"
                            />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "100px", marginRight: "0px" }}
                      >
                        <div className="item">
                          <Link to="#" target="_blank">
                            <img src="/tuyen-sinh/Upload/banner/kytucxa-318.png" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "100px", marginRight: "0px" }}
                      >
                        <div className="item">
                          <Link to="#">
                            <img src="/tuyen-sinh/Content/Template2020/images/cosovatchat-mobile.png" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "100px", marginRight: "0px" }}
                      >
                        <div className="item">
                          <Link to="#">
                            <img
                              src="/tuyen-sinh/Upload/banner/hocbong-6243.png"
                              width="100%"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-controls">
                    <div className="owl-nav">
                      <div className="owl-prev" style={{ display: "none" }}>
                        prev
                      </div>
                      <div className="owl-next" style={{ display: "none" }}>
                        next
                      </div>
                    </div>
                    <div className="owl-dots" style={{}}>
                      <div className="owl-dot">
                        <span />
                      </div>
                      <div className="owl-dot active">
                        <span />
                      </div>
                      <div className="owl-dot">
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="daihoc" data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="dh-sdh">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="item">
                        <div
                          className="box-title"
                          style={{
                            background: 'url("' + dh + '") no-repeat top left',
                            backgroundSize: "contain",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                          }}
                        >
                          <h2>
                            <Link to="#">?????I H???C </Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o x??t tuy???n Nguy???n v???ng b??? sung v??o ?????i h???c n??m 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o x??t tuy???n Nguy???n v???ng b??? sung v??o ?????i
                                h???c n??m 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="??H ???? n???ng c??ng b??? ??i???m tr??ng tuy???n theo k???t qu??? thi THPT n??m 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                ??H ???? N???ng c??ng b??? ??i???m tr??ng tuy???n theo k???t qu???
                                thi THPT n??m 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="H?????ng d???n Nh???p h???c Tr???c tuy???n t???i ?????i h???c ???? n???ng"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                H?????ng d???n Nh???p h???c Tr???c tuy???n t???i ?????i h???c ????
                                n???ng
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o ??i???m s??n X??t tuy???n v??o ?????i h???c n??m 2021"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o ??i???m s??n X??t tuy???n v??o ?????i h???c n??m
                                2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o ??i???u ch???nh th???i gian nh???p h???c n??m 2021"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o ??i???u ch???nh th???i gian nh???p h???c n??m 2021
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item">
                        <div
                          className="box-title"
                          style={{
                            background: 'url("' + sdh + '") no-repeat top left',
                            backgroundSize: "contain",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                          }}
                        >
                          <h2>
                            <Link to="#">SAU ?????I H???C</Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="TB Tuy???n sinh ????o t???o tr??nh ????? Ti???n S?? n??m 2021 - ?????t 2"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                TB Tuy???n sinh ????o t???o tr??nh ????? Th???c S?? n??m 2021
                                - ?????t 2
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="TB ??i???u ch???nh th???i gian tuy???n sinh Th???c s?? v?? Ti???n s?? ?????t 1 n??m 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                TB ??i???u ch???nh th???i gian tuy???n sinh Th???c s?? ?????t 1
                                n??m 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="L???ch ??n t???p ?????u v??o k??? thi tuy???n sinh Cao h???c ?????t 1 n??m 2021"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                L???ch ??n t???p ?????u v??o k??? thi tuy???n sinh Th???c s??
                                ?????t 1 n??m 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="L??? Giao ????? t??i Lu???n v??n Th???c s?? cho H???c vi??n Kh??a 21 t???i Ki??n Giang v?? ?????k L???k"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                L??? Giao ????? t??i Lu???n v??n Th???c s??
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="?????i h???c Duy T??n Khai gi???ng Cao h???c Kh??a 22"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng tin tuy???n sinh Th???c s?? t???i ?????i h???c ???? N???ng
                                n??m h???c 2021-2022
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item">
                        <div
                          className="box-title"
                          style={{
                            background:
                              'url("' + vhvl + '") no-repeat top left',
                            backgroundSize: "contain",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                          }}
                        >
                          <h2>
                            <Link to="#">
                              H??? B???NG 2, T??? XA &amp; V???A L??M V???A H???C
                            </Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng tin Tuy???n sinh ?????i h???c V??n B???ng th??? 2 h??? ch??nh quy n??m 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng tin Tuy???n sinh ?????i h???c V??n B???ng th??? 2 h???
                                ch??nh quy n??m 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o Tuy???n sinh ?????i h???c h??? T??? xa n??m 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o Tuy???n sinh ?????i h???c h??? T??? xa n??m 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o Tuy???n sinh ?????i h???c h??? V??n b???ng th??? 2 ch??nh quy - n??m 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o Tuy???n sinh ?????i h???c h??? V??n b???ng th??? 2
                                ch??nh quy - n??m 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o Tuy???n sinh C??? nh??n ?????i h???c Tr???c tuy???n (H??? t??? xa) n??m 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o Tuy???n sinh C??? nh??n ?????i h???c Tr???c tuy???n
                                (H??? t??? xa) n??m 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o Tuy???n sinh ?????i h???c h??? V??n b???ng th??? 2 ch??nh quy - n??m 2019"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o Tuy???n sinh ?????i h???c h??? V??n b???ng th??? 2
                                ch??nh quy - n??m 2019
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item">
                        <div
                          className="box-title"
                          style={{
                            background: 'url("' + lt + '") no-repeat top left',
                            backgroundSize: "contain",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                          }}
                        >
                          <h2>
                            <Link to="#">LI??N TH??NG ?????I H???C</Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="TB ??i???u ch???nh k??? ho???ch tuy???n sinh Li??n th??ng ?????t 1/2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                TB ??i???u ch???nh k??? ho???ch tuy???n sinh Li??n th??ng ?????t
                                1/2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng tin Tuy???n sinh Li??n th??ng n??m 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng tin Tuy???n sinh Li??n th??ng n??m 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng ba??o ??i???m chu???n tr??ng tuy???n li??n th??ng ?????t 1 n??m 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng ba??o ??i???m chu???n tr??ng tuy???n li??n th??ng ?????t
                                1 n??m 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Th??ng b??o ph??c kh???o tuy???n sinh Li??n th??ng ?????t 1 n??m 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Th??ng b??o ph??c kh???o tuy???n sinh Li??n th??ng ?????t 1
                                n??m 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="K???t qu??? thi tuy???n sinh Li??n th??ng ?????t 1 n??m 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                K???t qu??? thi tuy???n sinh Li??n th??ng ?????t 1 n??m 2020
                                - 2021
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="banner-QC">
                  <img
                    src={sl1}
                    alt={sl1}
                    stye={{ width: "100%", height: "100%" }}
                  />

                  <img
                    src={sl2}
                    alt={sl2}
                    stye={{ width: "100%", height: "100%" }}
                  />

                  <img
                    src={sl3}
                    alt={sl3}
                    stye={{ width: "100%", height: "100%" }}
                  />
                  <img
                    src={sl4}
                    alt={sl4}
                    stye={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////////////////////////////// */}
        <section
          className="story-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="story-wp">
                  <div className="title-story">
                    <a href="/tuyen-sinh/MegaStory/Story.aspx">
                      <span className="uppercase bold-text">
                        Ph??n Hi???u ?????i h???c ???? N???ng
                      </span>
                      <span className="font-hl">Story</span>
                    </a>
                  </div>
                  <div className="story-slide">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transition: "all 1s ease 0s",
                          width: "4930px",
                          display: "flex",
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "270px", marginRight: "20px" }}
                        >
                          <div className="item">
                            <a
                              href="/tuyen-sinh/MegaStory/Default.aspx?id=6"
                              title="X??y d???ng - ngh??? x??y nh??, ngh??? x??y t??? ???m"
                            >
                              <img
                                src={sl8}
                                alt={sl8}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </div>
                        </div>

                        <div
                          className="owl-item cloned"
                          style={{ width: "270px", marginRight: "20px" }}
                        >
                          <div className="item">
                            <a
                              href="/tuyen-sinh/MegaStory/Default.aspx?id=6"
                              title="X??y d???ng - ngh??? x??y nh??, ngh??? x??y t??? ???m"
                            >
                              <img
                                src={sl5}
                                alt={sl5}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </div>
                        </div>

                        <div
                          className="owl-item cloned"
                          style={{ width: "270px", marginRight: "20px" }}
                        >
                          <div className="item">
                            <a
                              href="/tuyen-sinh/MegaStory/Default.aspx?id=6"
                              title="X??y d???ng - ngh??? x??y nh??, ngh??? x??y t??? ???m"
                            >
                              <img
                                src={sl6}
                                alt={sl6}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </div>
                        </div>

                        <div
                          className="owl-item cloned"
                          style={{ width: "270px", marginRight: "20px" }}
                        >
                          <div className="item">
                            <a
                              href="/tuyen-sinh/MegaStory/Default.aspx?id=6"
                              title="X??y d???ng - ngh??? x??y nh??, ngh??? x??y t??? ???m"
                            >
                              <img
                                src={sl7}
                                alt={sl7}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* tu van */}
        <section className="tuvan" data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
            <div className="row">
              <div className="col-md-8 fqa">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <a href="/tuyen-sinh/Page/FQA.aspx">
                    <ContactSupportIcon
                      style={{ fontSize: "60px", color: "#2b2666" }}
                    />
                    <h1 className="title icon d-inline-block">
                      C??u h???i th?????ng g???p
                    </h1>
                  </a>
                  <div
                    className="float-right hide-mobile"
                    style={{ marginTop: "2em" }}
                  >
                    <div className="seemore">
                      <a href="/tuyen-sinh/Page/FQA.aspx" className="see-more">
                        XEM T???T C???
                      </a>
                    </div>
                  </div>
                </div>
                <div className="list-question">
                  <ul>
                    <li>
                      <a href="#">
                        Th??nh t??ch n???i b???t c???a ?????i ng?? c??n b???, gi???ng vi??n v??
                        nh??n vi??n c???a ?????i h???c ???? n???ng trong nh???ng n??m g???n ????y l??
                        g???
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        V??o h???c ??? ?????i h???c ???? N???ng c?? nh???ng ch??nh s??ch g?? so v???i
                        c??c tr?????ng kh??c?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Th??nh t??ch n???i b???t c???a h???c sinh v?? sinh vi??n ?????i h???c ????
                        n???ng l?? g???
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        ?????i h???c ???? n???ng ??p d???ng h??nh th???c thi tuy???n v?? x??t tuy???n
                        n??o?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        C??c ch??nh s??ch ??u ti??n cho nh???ng d??n t???c v??ng s??u, v??ng
                        xa bao g???m nh???ng g???
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        H???c Kinh t??? l?? t???i ?????i h???c ???? n???ng c?? ph???i l?? l???a ch???n
                        ????ng ?????n?
                      </a>
                    </li>
                  </ul>
                  <div className="box-more clear-after">
                    <a href="#" target="_self" className="more pull-right">
                      T?? v???n tuy???n sinh
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 tags">
                <h1 className="title title">Tags</h1>
                <div className="list-tags">
                  <a href="#">h???c ng??nh CNTT t???i ?????i h???c ???? N???ng</a>
                  <a href="#">?????i h???c ???? n???ng tuy????n sinh ng??nh CNTT</a>
                  <a href="#">Khoa kinh t???</a>
                  <a href="#">Khoa SP v?? d??? b??? ?????i h???c</a>
                  <a href="#">Tuy???n sinh ?????i h???c</a>
                  <a href="#">ng??nh qu???n tr??? kinh doanh</a>
                  <a href="#">ng??nh lu???t kinh t???</a>
                  <a href="#">tuy????n sinh ??a??i ho??c</a>
                  <a href="#">ho??c b????ng 2021</a>
                  <a href="#">k?? t??c x??</a>
                  <a href="#">sau ?????i h???c</a>
                  <a href="#">Li??n th??ng</a>
                  <a href="#">th??ng tin tuy???n sinh</a>
                  <a href="#">h???c tr???c tuy???n</a>
                  <a href="#">x??t k???t qu??? thi thpt</a>
                  <a href="#">??i???m chu???n x??t tuy???n</a>
                  <a href="#">x??t h???c b???</a>
                  <a href="#">h???c ph??</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admissions;
