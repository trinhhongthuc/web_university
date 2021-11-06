import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { ReactComponent as University } from "../../assets/image/university-solid.svg";
import { ReactComponent as Student } from "../../assets/image/student.svg";
import Container from "@mui/material/Container";
import EventIcon from "@mui/icons-material/Event";
import AOS from "aos";

const Students = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const data = [
    {
      title:
        "Kế hoạch Tổ chức Cuộc thi “Thay lời tri ân” chào mừng Ngày Nhà giáo Việt Nam 20/11",
      date: "01/11/2021 11:04 AM",
      description:
        "Nhằm tạo sân chơi bổ ích và có ý nghĩa để Sinh viên thể hiện lòng biết ơn, tri ân những cống hiến trong sự nghiệp giáo dục của Thầy cô/Cán bộ viên chức/Người lao động tại Phân hiệu ĐHĐN tại Kon Tum.Giúp Sinh viên thể hiện tài năng về chụp ảnh, viết bài, thể hiện được cảm xúc của cá nhân về những điều mình yêu thích.Lan tỏa hình ảnh đẹp, tình cảm gắn bó, yêu thương của Sinh viên, Giảng viên/ Cán bộ viên chức/Người lao động tại Phân hiệu, tạo nên dấu ấn riêng và quảng bá được thương hiệu của UDCK đến với cộng đồng.",
    },
    {
      title: "Lịch thi tiếng Anh chuẩn đầu ra năm 2021 (Đợt 2)",
      date: "01/11/2021 14:05 PM",
      description:
        "Nhằm đảm bảo tiến độ học tập năm học 2021 – 2022. Nhà trường thông báo đến toàn thể sinh viên, học viên của Phân hiệu ĐHĐN tại Kon Tum lịch thi tiếng Anh chuẩn đầu ra năm 2021(đợt 2)",
    },

    {
      title:
        "Quyết định về việc buộc thôi học sinh viên hình thức đào tạo chính quy do không đăng ký tín chỉ học kỳ 2 năm học 2020-2021",
      date: "14/10/2021 11:05 AM",
      description:
        "Quyết định về việc buộc thôi học sinh viên hình thức đào tạo chính quy do không đăng ký tín chỉ học kỳ 2 năm học 2020-2021",
    },

    {
      title:
        "Quyết định về việc buộc thôi học sinh viên hình thức đào tạo chính quy từ học kỳ 2 năm học 2020-2021",
      date: "14/10/2021 11:01 AM",
      description:
        "Quyết định về việc buộc thôi học sinh viên hình thức đào tạo chính quy từ học kỳ 2 năm học 2020-2021",
    },

    {
      title:
        "Thông báo đăng ký ở nội trú Ký túc xá sinh viên Phân hiệu ĐHĐN tại Kon Tum",
      date: "13/10/2021 16:24 PM",
      description:
        "Nhằm tạo điều kiện cho các em Tân sinh viên Khóa K21 có nguyện vọng được đăng ký ở Ký túc xá Phân hiệu Đại học Đà Nẵng tại Kon Tum năm học 2021-2022, Phòng Công tác Học sinh sinh viên thông báo về các hình thức đăng ký",
    },

    {
      title: "Lịch thi kết thúc học kỳ I năm học 2021-2022 hệ chính quy",
      date: "05/10/2021 16:14 PM",
      description: "Lịch thi kết thúc học kỳ I năm học 2021-2022 hệ chính quy",
    },

    {
      title:
        "Thông báo về Chương trình học sinh sinh viên vay vốn theo Quyết định số 157/2007/QĐ-TTg của Thủ tướng Chính phủ do ảnh hưởng của đại dịch Covid-19",
      date: "30/09/2021 16:07 PM",
      description:
        "Thông báo về Chương trình học sinh sinh viên vay vốn theo Quyết định số 157/2007/QĐ-TTg của Thủ tướng Chính phủ do ảnh hưởng của đại dịch Covid-19",
    },

    {
      title:
        "Chương trình trao đổi sinh viên với trường Đại học Caen Normandie và trường Đại học Nantes tại Pháp",
      date: "28/09/2021 16:56 PM",
      description:
        "Chương trình trao đổi sinh viên với trường Đại học Caen Normandie và trường Đại học Nantes tại Pháp",
    },
    //

    {
      title: "Thông báo về việc tổ chức dạy học trực tiếp",
      date: "22/09/2021 08:15 AM",
      description: "Thông báo về việc tổ chức dạy học trực tiếp",
    },

    {
      title:
        "Lịch thi kết thúc học kỳ 02 năm học 2020-2021 hệ chính quy ngày 27/08/2021",
      date: "23/08/2021 10:23 AM",
      description:
        "Sinh viên tự chuẩn bị máy tính có webcam và kiểm tra đường truyền internet trước 30 phút. Đúng 7h30 Tổ Khảo thí ĐBCLGD&CNTT điểm danh trên phần mềm MS Teams sinh viên vào nhóm thi và trình thẻ sinh viên hoặc giấy tờ tùy thân. Sinh viên chưa nộp học phí không được thi.",
    },

    {
      title:
        "Thông báo Chương trình trao đổi sinh viên trực tuyến 2021 của Đại học Kansai – Nhật Bản",
      date: "10/08/2021 07:39 AM",
      description:
        "Chương trình trao đổi sinh viên trực tuyến của Đại học Kansai được tổ chức lần đầu tiên vào mùa thu năm 2020. Đây là sáng kiến “Quốc tế hóa tại nhà – Internalization at Home” nhằm mang lại một cơ hội HOÀN TOÀN MIỄN PHÍ cho các bạn sinh viên quốc tế được tiếp cận các giá trị văn hóa cũng như chất lượng đào tạo hàng đầu của đất nước Nhật Bản.",
    },

    {
      title:
        "Thông báo về việc sinh viên tốt nghiệp đợt 3 năm 2021 nhận Giấy chứng nhận tốt nghiệp và Bảng điểm tạm thời",
      date: "02/08/2021 16:13 PM",
      description:
        "Căn cứ Quyết định số 2811/QĐ-ĐHĐN, ngày 30/07/2021 của Giám đốc Đại học Đà Nẵng về việc công nhận tốt nghiệp và cấp bằng cho sinh viên hình thức đào tạo chính quy;",
    },

    {
      title:
        "Thông báo đăng ký đề xuất đề tài nghiên cứu khoa học sinh viên năm học 2021 – 2022",
      date: "02/08/2021 16:01 PM",
      description:
        "Thực hiện kế hoạch nghiên cứu khoa học sinh viên năm học 2021-2022, Q. Giám đốc Phân hiệu đề nghị lãnh đạo các Khoa triển khai các công",
    },

    {
      title: "Kết quả thi đánh giá năng lực Ngoại ngữ hệ chính quy, VLVH",
      date: "23/07/2021 10:58 AM",
      description: "Kết quả thi đánh giá năng lực Ngoại ngữ hệ chính quy, VLVH",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="education mt-5" style={{ paddingTop: "90px" }}>
      <Container>
        <div className="row">
          <div
            className="col-xl-3"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="education-list">
              <h4 className="education-list-heading">Đào tạo</h4>
              <ul className="education-list-ul">
                <li className="education-list-ul-li">
                  <Link to="#"> Đại học</Link>
                  <ul>
                    <li>
                      <Link to="#">Quản lý nhà nước</Link>
                    </li>
                    <li>
                      <Link to="#">Giáo dục tiểu học</Link>
                    </li>
                    <li>
                      <Link to="#">Quản trị kinh doanh</Link>
                    </li>

                    <li>
                      <Link to="#">Quản trị DVDL & Lữ hành</Link>
                    </li>

                    <li>
                      <Link to="#">Tài chính ngân hàng</Link>
                    </li>

                    <li>
                      <Link to="#">Kế toán</Link>
                    </li>

                    <li>
                      <Link to="#">Luật kinh tế </Link>
                    </li>

                    <li>
                      <Link to="#">Kỹ thuật công trình và xây dựng </Link>
                    </li>

                    <li>
                      <Link to="#">Công nghệ thông tin</Link>
                    </li>

                    <li>
                      <Link to="#">Kỹ thuật điện</Link>
                    </li>

                    <li>
                      <Link to="#">Công nghệ sinh học</Link>
                    </li>
                  </ul>
                </li>
                <li className="education-list-ul-li">
                  {" "}
                  <Link to="#"> Sau đại học </Link>{" "}
                </li>
                <li className="education-list-ul-li">
                  {" "}
                  <Link to="#"> Hệ vừa làm vừa học </Link>{" "}
                  <ul>
                    <li>
                      <Link to="#">Đại học vùa làm vừa học</Link>
                    </li>

                    <li>
                      <Link to="#">Liên thông cao đẳng lên đại học</Link>
                    </li>
                    <li>
                      <Link to="#">Đại học bằng 2</Link>
                    </li>
                    <li>
                      <Link to="#">Liên thông trung cấp lên đại học</Link>
                    </li>
                  </ul>
                </li>
                <li className="education-list-ul-li">
                  {" "}
                  <Link to="#"> Đào tạo từ xa </Link>{" "}
                  <ul>
                    <li>
                      <Link to="#">Đại học từ xa</Link>
                    </li>

                    <li>
                      <Link to="#">Đại học bằng 2</Link>
                    </li>
                    <li>
                      <Link to="#">Đào tạo trực tuyến </Link>
                    </li>
                    <li>
                      <Link to="#">Liên thông trung cấp lên đại học</Link>
                    </li>
                  </ul>
                </li>
                <li className="education-list-ul-li">
                  {" "}
                  <Link to="#"> Đào tạo ngắn hạn </Link>{" "}
                </li>
                <li className="education-list-ul-li">
                  {" "}
                  <Link to="#"> Đào tạo quốc tế </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="row">
              <div class="title_header_content">
                <h3>
                  <span>Thông tin Sinh viên UDCK</span>
                </h3>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              {data &&
                data.map((item, index) => {
                  return (
                    <Accordion key={index} style={{ marginBottom: "8px" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{item.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          style={{
                            color: "#333",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "bold",
                            marginBottom: "6px",
                          }}
                          className="time-Date"
                        >
                          <EventIcon
                            style={{
                              marginRight: "12px",
                              fontSize: "18px",
                            }}
                          />
                          {item.date}
                        </Typography>
                        <Typography>{item.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
            </div>
            <div className="row">
              <nav className="nav-pagination">
                <ul class="pagination">
                  <li class="page-item">
                    <Link class="page-link" to="#">
                      Previous
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="col-xl-3 mt-3"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col_right_right col_page fload_left">
              <div className="title">
                <a href="/sau-dai-hoc">Sau Đại Học</a>
              </div>
              <ul className="box_anow">
                <li>
                  <Student />
                  <Link to="#" className="link_left">
                    Đào tạo Thạc sĩ
                  </Link>
                </li>
              </ul>
              <div className="title">
                <Link to="#" className="link_left">
                  Đại học
                </Link>
              </div>
              <ul className="box_anow">
                <li>
                  <University />

                  <Link to="#" className="link_left">
                    Trường đại học kinh tế
                  </Link>
                </li>
                <li>
                  <University />

                  <Link to="#" className="link_left">
                    Trường đại học sư phạm
                  </Link>
                </li>
                <li>
                  <University />

                  <Link to="#" className="link_left">
                    Trường đại học sư phạm và kỹ thuật
                  </Link>
                </li>
                <li>
                  <University />

                  <Link to="#" className="link_left">
                    Trường cao đẳng công nghệ thông tin
                  </Link>
                </li>
                <li>
                  <University />

                  <Link to="#" className="link_left">
                    Viện nghiên cứu đào tạo việt - anh
                  </Link>
                </li>
                <li>
                  <University />

                  <Link to="#" className="link_left">
                    Viện công nghệ quốc tế dniit
                  </Link>
                </li>
                <li>
                  <University />

                  <Link to="#" className="link_left">
                    Trường cao đẳng công nghệ thông tin
                  </Link>
                </li>
              </ul>
              <div className="title">
                <a href="/lien-thong-bang-2">Liên Thông/Bằng 2</a>
              </div>
              <ul className="box_anow">
                <li>
                  <Link to="#" className="link_left">
                    Chuyên ngành Đào tạo Liên thông
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link_left">
                    Chuyên ngành Đào tạo Bằng 2
                  </Link>
                </li>
              </ul>
              <div className="title">
                <Link className="link_left">University</Link>
              </div>
              <ul className="box_anow">
                <li>
                  <Link to="#" className="link_left">
                    Quản lý nhà nước
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link_left">
                    Quản trị kinh doanh
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link_left">
                    Quản trị DVDL & Lữ hành
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link_left">
                    Tài chính ngân hàng
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link_left">
                    Kế toán
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link_left">
                    Luật kinh tế
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link_left">
                    Kỹ thuật công trình và xây dựng
                  </Link>
                </li>

                <li>
                  <Link to="#" className="link_left">
                    Công nghệ thông tin
                  </Link>
                </li>

                <li>
                  <Link to="#" className="link_left">
                    Kỹ thuật điện
                  </Link>
                </li>

                <li>
                  <Link to="#" className="link_left">
                    Công nghệ sinh học
                  </Link>
                </li>

                <li>
                  <Link to="#" className="link_left">
                    Giáo dục tiểu học
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Students;
