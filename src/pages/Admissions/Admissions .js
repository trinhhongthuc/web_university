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
                    <p className="text-hl text-sm">THÔNG TIN TUYỂN SINH 2021</p>
                    <ul className="tuyensinh-text">
                      <li>
                        <Link
                          to="#"
                          title="Thông tin Tuyển sinh Đại học năm 2021"
                        >
                          Thông tin Tuyển sinh Đại học năm 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Thông báo điểm chuẩn Đại học 2021">
                          Thông báo điểm chuẩn Đại học 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Quy trình Đăng ký">
                          Quy trình Đăng ký
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Thủ tục Nhập học">
                          Thủ tục Nhập học
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Học phí 2021 - 2022">
                          Học phí 2021 - 2022
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Chính sách Ưu tiên">
                          Chính sách Ưu tiên
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Tuyển sinh ngành Giáo dục tiểu học">
                          Tuyển sinh ngành Giáo dục tiểu học
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Đối tượng Tuyển sinh">
                          Đối tượng Tuyển sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Chỉ tiêu Tuyển Sinh">
                          Chỉ tiêu Tuyển Sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#">QUY ĐỊNH &amp; BIỂU MẪU</Link>
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
                    <p className="text-hl text-sm">THÔNG TIN TUYỂN SINH 2021</p>
                    <ul className="tuyensinh-text">
                      <li>
                        <Link
                          to="#"
                          title="Thông tin Tuyển sinh Đại học năm 2021"
                        >
                          Thông tin Tuyển sinh Đại học năm 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Thông báo điểm chuẩn Đại học 2021">
                          Thông báo điểm chuẩn Đại học 2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Quy trình Đăng ký">
                          Quy trình Đăng ký
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Thủ tục Nhập học">
                          Thủ tục Nhập học
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Học phí 2021 - 2022">
                          Học phí 2021 - 2022
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Chính sách Ưu tiên">
                          Chính sách Ưu tiên
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Thi tuyển ngành Kiến trúc">
                          Thi tuyển ngành Kiến trúc
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Đối tượng Tuyển sinh">
                          Đối tượng Tuyển sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Chỉ tiêu Tuyển Sinh">
                          Chỉ tiêu Tuyển Sinh
                        </Link>
                      </li>
                      <li>
                        <Link to="#">QUY ĐỊNH &amp; BIỂU MẪU</Link>
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
                            <Link to="#">ĐẠI HỌC </Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo xét tuyển Nguyện vọng bổ sung vào Đại học năm 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo xét tuyển Nguyện vọng bổ sung vào Đại
                                học năm 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="ĐH Đà nẵng công bố điểm trúng tuyển theo kết quả thi THPT năm 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                ĐH Đà Nẵng công bố điểm trúng tuyển theo kết quả
                                thi THPT năm 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Hướng dẫn Nhập học Trực tuyến tại Đại học Đà nẵng"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Hướng dẫn Nhập học Trực tuyến tại Đại học Đà
                                nẵng
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo Điểm sàn Xét tuyển vào Đại học năm 2021"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo Điểm sàn Xét tuyển vào Đại học năm
                                2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo Điều chỉnh thời gian nhập học năm 2021"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo Điều chỉnh thời gian nhập học năm 2021
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
                            <Link to="#">SAU ĐẠI HỌC</Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="TB Tuyển sinh đào tạo trình độ Tiến Sĩ năm 2021 - đợt 2"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                TB Tuyển sinh đào tạo trình độ Thạc Sĩ năm 2021
                                - đợt 2
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="TB Điều chỉnh thời gian tuyển sinh Thạc sĩ và Tiến sĩ đợt 1 năm 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                TB Điều chỉnh thời gian tuyển sinh Thạc sĩ đợt 1
                                năm 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Lịch ôn tập đầu vào kỳ thi tuyển sinh Cao học đợt 1 năm 2021"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Lịch ôn tập đầu vào kỳ thi tuyển sinh Thạc sĩ
                                đợt 1 năm 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Lễ Giao Đề tài Luận văn Thạc sĩ cho Học viên Khóa 21 tại Kiên Giang và Đắk Lắk"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Lễ Giao Đề tài Luận văn Thạc sĩ
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Đại học Duy Tân Khai giảng Cao học Khóa 22"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông tin tuyển sinh Thạc sĩ tại Đại học Đà Nẵng
                                năm học 2021-2022
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
                              HỆ BẰNG 2, TỪ XA &amp; VỪA LÀM VỪA HỌC
                            </Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="Thông tin Tuyển sinh Đại học Văn Bằng thứ 2 hệ chính quy năm 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Thông tin Tuyển sinh Đại học Văn Bằng thứ 2 hệ
                                chính quy năm 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo Tuyển sinh Đại học hệ Từ xa năm 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo Tuyển sinh Đại học hệ Từ xa năm 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2 chính quy - năm 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2
                                chính quy - năm 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo Tuyển sinh Cử nhân Đại học Trực tuyến (Hệ từ xa) năm 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo Tuyển sinh Cử nhân Đại học Trực tuyến
                                (Hệ từ xa) năm 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2 chính quy - năm 2019"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo Tuyển sinh Đại học hệ Văn bằng thứ 2
                                chính quy - năm 2019
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
                            <Link to="#">LIÊN THÔNG ĐẠI HỌC</Link>
                          </h2>
                        </div>
                        <div className="list-link">
                          <ul>
                            <li>
                              <Link
                                to="#"
                                title="TB Điều chỉnh kế hoạch tuyển sinh Liên thông đợt 1/2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                TB Điều chỉnh kế hoạch tuyển sinh Liên thông đợt
                                1/2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông tin Tuyển sinh Liên thông năm 2021"
                                className="is-news"
                              >
                                <KeyboardArrowRightIcon />
                                Thông tin Tuyển sinh Liên thông năm 2021
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo Điểm chuẩn trúng tuyển liên thông đợt 1 năm 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo Điểm chuẩn trúng tuyển liên thông đợt
                                1 năm 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Thông báo phúc khảo tuyển sinh Liên thông đợt 1 năm 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Thông báo phúc khảo tuyển sinh Liên thông đợt 1
                                năm 2020
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                title="Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020"
                                className
                              >
                                <KeyboardArrowRightIcon />
                                Kết quả thi tuyển sinh Liên thông đợt 1 năm 2020
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
                        Phân Hiệu đại học Đà Nẵng
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
                              title="Xây dựng - nghề xây nhà, nghề xây tổ ấm"
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
                              title="Xây dựng - nghề xây nhà, nghề xây tổ ấm"
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
                              title="Xây dựng - nghề xây nhà, nghề xây tổ ấm"
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
                              title="Xây dựng - nghề xây nhà, nghề xây tổ ấm"
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
                      Câu hỏi thường gặp
                    </h1>
                  </a>
                  <div
                    className="float-right hide-mobile"
                    style={{ marginTop: "2em" }}
                  >
                    <div className="seemore">
                      <a href="/tuyen-sinh/Page/FQA.aspx" className="see-more">
                        XEM TẤT CẢ
                      </a>
                    </div>
                  </div>
                </div>
                <div className="list-question">
                  <ul>
                    <li>
                      <a href="#">
                        Thành tích nổi bật của đội ngũ cán bộ, giảng viên và
                        nhân viên của Đại học Đà nẵng trong những năm gần đây là
                        gì?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Vào học ở Đại học Đà Nẵng có những chính sách gì so với
                        các trường khác?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Thành tích nổi bật của học sinh và sinh viên Đại học đà
                        nẵng là gì?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Đại học đà nẵng áp dụng hình thức thi tuyển và xét tuyển
                        nào?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Các chính sách ưu tiên cho những dân tộc vùng sâu, vùng
                        xa bao gồm những gì?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Học Kinh tế là tại đại học đà nẵng có phải là lựa chọn
                        đúng đắn?
                      </a>
                    </li>
                  </ul>
                  <div className="box-more clear-after">
                    <a href="#" target="_self" className="more pull-right">
                      Tư vấn tuyển sinh
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 tags">
                <h1 className="title title">Tags</h1>
                <div className="list-tags">
                  <a href="#">học ngành CNTT tại Đại học Đà Nẵng</a>
                  <a href="#">Đại học Đà nẵng tuyển sinh ngành CNTT</a>
                  <a href="#">Khoa kinh tế</a>
                  <a href="#">Khoa SP và dự bị đại học</a>
                  <a href="#">Tuyển sinh Đại học</a>
                  <a href="#">ngành quản trị kinh doanh</a>
                  <a href="#">ngành luật kinh tế</a>
                  <a href="#">tuyển sinh đại học</a>
                  <a href="#">học bổng 2021</a>
                  <a href="#">ký túc xá</a>
                  <a href="#">sau đại học</a>
                  <a href="#">Liên thông</a>
                  <a href="#">thông tin tuyển sinh</a>
                  <a href="#">học trực tuyến</a>
                  <a href="#">xét kết quả thi thpt</a>
                  <a href="#">điểm chuẩn xét tuyển</a>
                  <a href="#">xét học bạ</a>
                  <a href="#">học phí</a>
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
