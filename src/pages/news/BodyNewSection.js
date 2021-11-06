import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import img1 from "../../assets/image/new-3.jpg";
import img4 from "../../assets/image/new-4.jpg";
import img5 from "../../assets/image/new-5.jpg";
import img6 from "../../assets/image/new-6.jpg";
import img7 from "../../assets/image/new-7.jpg";
import img8 from "../../assets/image/new-8.jpg";
import img9 from "../../assets/image/new-9.jpg";
import img11 from "../../assets/image/new-11.jfif";
import img10 from "../../assets/image/new-10.jpg";
import img12 from "../../assets/image/new-12.jpg";
import img13 from "../../assets/image/new-13.jpg";
import img14 from "../../assets/image/new-14.jpg";
import img15 from "../../assets/image/new-15.jfif";
import img16 from "../../assets/image/new-16.jfif";
import img17 from "../../assets/image/new17.jpg";
import img18 from "../../assets/image/new18.jpg";
import img19 from "../../assets/image/new-19.jpg";
import img20 from "../../assets/image/new-20.jfif";
import img21 from "../../assets/image/new-21.jpg";
import img22 from "../../assets/image/new-22.jpg";
import AOS from "aos";

// import img1 from "../../assets/image/news_2.jpg";
import { ReactComponent as WriteNew } from "../../assets/image/pen-square-solid.svg";
import { Link } from "react-router-dom";
const BodyNewSection = () => {
  const dataNewLeft = [
    {
      img: img4,
      title:
        "Hội hữu nghị Việt Nam – Lào, Việt Nam – Campuchia tỉnh Kon Tum trao quà hỗ trợ cho các lưu học sinh hỗ trợ cho các lưu học sinh hỗ trợ cho các lưu học sinh hỗ trợ cho các lưu học sinh",
      time: "05/03/2021",
      description:
        "Nhằm kịp thời động viện, hỗ trợ nhu yếu phẩm cho các LHS trong tình hình dịch bệnh Covid-19 hiện nay, sáng ngày 05/03, Hội hữu nghị Việt Nam – Lào, Việt Nam – Campuchia của tỉnh Kon Tum đã có chuyến thăm và trao",
    },

    {
      img: img5,
      title:
        "Seminar “Đào tạo trực tuyến khối ngành kỹ thuật”: Mong muốn mang lại hiệu quả tốt nhất cho người học",
      time: "27/10/2021",
      description:
        "​​​​​​​Trong năm học vừa qua, do ảnh hưởng của dịch Covid-19, sinh viên phải nghỉ học trong thời gian dài để thực hiện cách ly xã hội, để đảm bảo không gián đoạn việc học, hoàn thành đúng tiến độ chương trình đào tạo, Phân hiệu ĐHĐN tại Kon Tum đã kịp thời triển khai phương pháp giảng dạy trực tuyến trong học kỳ 2, năm học 2019-2020.",
    },

    {
      img: img6,
      title:
        "UDCK tổ chức giao lưu bóng chuyền chào mừng ngày phụ nữ Việt Nam 20-10",
      time: "05/03/2021",
      description:
        "Chiều ngày 20/10/2021 chương trình giao lưu bóng chuyền giữa công đoàn Hành chính và công đoàn Giảng viên diễn ra hết sức sôi nổi, hào hứng.",
    },

    {
      img: img7,
      time: "05/03/2021",
      title:
        "Khảo sát, đề xuất hợp tác nghiên cứu, phát triển nguồn tài nguyên dược liệu tại Vườn Quốc gia Chư Mom Ray, tỉnh KonTum",
      description:
        "Vừa qua, nhóm nghiên cứu của Đại học Đà Nẵng (ĐHĐN) về bảo tồn, phát triển nguồn tài nguyên dược liệu đã làm việc, khảo sát thực tế tại Vườn quốc gia Chư Mom Ray, huyện Sa Thầy, tỉnh KonTum.",
    },

    {
      img: img8,
      time: "05/03/2021",
      title:
        "Đại học Đà Nẵng ký kết Thoả thuận hợp tác với Đại học Quốc gia Yokohama, Nhật Bản",
      description:
        "Chiều ngày 21/10/2021, PGS.TS. Nguyễn Ngọc Vũ-Giám đốc Đại học Đà Nẵng (ĐHĐN) và GS. Umehara Izuru-Giám đốc Đại học Quốc gia Yokohama, Nhật Bản (YNU) đã chủ trì tại điểm cầu của mỗi đại học Lễ ký kết Thoả thuận hợp tác giữa ĐHĐN và YNU được tổ chức trực tuyến..",
    },

    {
      img: img9,
      time: "05/03/2021",
      title:
        "Tổ chức khám sức khỏe và hướng dẫn cài đặt, sử dụng ứng dụng bảo hiểm xã hội số (VSSID) Tân sinh viên K21",
      description:
        "Ngày 21/10/2021, Phân hiệu ĐHĐN tại Kon Tum đã phối hợp với Trung tâm giám định Y khoa tỉnh Kon Tum tổ chức khám sức khỏe đầu vào cho Tân sinh viên hệ Đại học chính quy K21, năm học 2021-2022.",
    },

    {
      img: img10,
      time: "05/03/2021",
      title:
        "UDCK tiếp sức mùa thi năm 2021: Nhiều hoạt động thiết thực đồng hành cùng thí sinh",
      description:
        "Chương trình Tiếp sức mùa thi là hoạt động thường niên của Đoàn Thanh niên Phân hiệu ĐHĐN tại Kon Tum nhằm hỗ trợ thí sinh tham gia kỳ thi THPT quốc gia.",
    },

    {
      img: img11,
      time: "05/03/2021",
      title:
        "Hội nghị tổng kết công tác xây dựng Đảng năm 2020 và triển khai phương hướng nhiệm vụ năm 2021",
      description:
        "Thực hiện Kế hoạch số 07-KH/ĐU, ngày 15/01/2021, Đảng bộ Phân hiệu Đại học Đà Nẵng (ĐHĐN) tại Kon Tum tổ chức Hội nghị tổng kết công tác xây dựng Đảng năm 2020 và triển khai phương hướng, nhiệm vụ năm 2021.",
    },

    {
      img: img12,
      time: "05/03/2021",
      title: "UD-CK ký kết thỏa thuận hợp tác với Công ty cổ phần XNK Lộc Anh",
      description:
        "Chiều ngày 24/09/2021, đại diện lãnh đạo Phân hiệu ĐHĐN tại Kon Tum đã có buổi làm việc và ký kết thỏa thuận hợp tác với Công ty CP XNK Lộc Anh (Kon Tum.",
    },
  ];

  const dataWriteNews1 = [
    {
      img: img13,
      description:
        "Đại diện Sở Giáo dục và Thể thao tỉnh Attapư (CHDCND Lào) sang chúc Tết tại UD-CK",
    },

    {
      img: img14,
      description:
        "UDCK tổ chức họp mặt Kỷ niệm 45 năm Quốc khánh nước CHDCND Lào",
    },

    {
      img: img15,
      description:
        "UDCK tổ chức thành công hội nghị sinh viên nghiên cứu khoa học cấp trường năm học 2020-2021",
    },

    {
      img: img16,
      description:
        "Khoa Kỹ thuật – Nông nghiệp tổ chức báo cáo tổng kết đề tài NCKH sinh viên",
    },

    {
      img: img17,
      description:
        "Khoa Kỹ thuật – Nông nghiệp ra mắt gian hàng trưng bày sản phẩm Công nghệ sinh học",
    },
  ];

  const dataWriteNews2 = [
    {
      img: img18,
      description:
        "ThS. Phan Thị Thanh Trúc – Phó Trưởng khoa Kinh tế vinh dự nhận bằng khen của Công đoàn Giáo dục Việt Nam",
    },

    {
      img: img19,
      description:
        "Mang yêu thương đến với các em học sinh Trường Tiểu học Kim Đồng, H. Đăk Glei",
    },

    {
      img: img20,
      description:
        "Công đoàn UDCK tổ chức buổi tọa đàm kỷ niệm 90 năm ngày thành lập Hội liên hiệp Phụ nữ Việt Nam (20/10)",
    },

    {
      img: img21,
      description:
        "BCH Công đoàn tổ chức “Đêm hội trăng rằm” sôi nổi và ý nghĩa dành cho con em CBVC-NLĐ",
    },

    {
      img: img22,
      description: "CBVC – Người lao động UD-CK rộn ràng chào đón ngày 20-10",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="body-new-section">
      <Container>
        <div className="row">
          <div
            className="col-xl-8"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <ul
              className="body-new-section-ul"
              style={{ borderTop: "1px dashed  #ccc" }}
            >
              {dataNewLeft &&
                dataNewLeft.map((item, index) => {
                  return (
                    <li className="body-new-section-ul-li" key={index}>
                      <Link to="#" style={{ display: "flex" }}>
                        <div className="wrapper-img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="wrapper-content">
                          <h4 className="wrapper-content-title">
                            {item.title.length > 120
                              ? item.title.slice(0, 120) + "..."
                              : item.title}
                          </h4>
                          <p className="wrapper-content-time">{item.time}</p>
                          <p className="wrapper-content-text">
                            {item.description.length > 220
                              ? item.description.slice(0, 220) + "..."
                              : item.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>

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
          <div
            className="col-xl-4"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="body-new-right">
              <ul className="body-new-right-write-news">
                <h3 className="writer-news-heading">
                  <WriteNew /> Bài viết mới nhất
                </h3>

                {dataWriteNews1 &&
                  dataWriteNews1.map((item, index) => {
                    return (
                      <li className="writer-news-li" key={index}>
                        <Link to="#" style={{ display: "flex" }}>
                          <div className="write-news-img">
                            <img src={item.img} alt="" />
                          </div>

                          <p className="writer-news-content">
                            {item.description.length > 123
                              ? item.description.slice(0, 123) + "..."
                              : item.description}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
              </ul>

              <ul className="body-new-right-write-news">
                <h3 className="writer-news-heading">
                  <WriteNew />
                  xem nhiều nhất
                </h3>

                {dataWriteNews2 &&
                  dataWriteNews2.map((item, index) => {
                    return (
                      <li className="writer-news-li" key={index}>
                        <Link to="#" style={{ display: "flex" }}>
                          <div className="write-news-img">
                            <img src={item.img} alt="" />
                          </div>

                          <p className="writer-news-content">
                            {item.description.length > 123
                              ? item.description.slice(0, 123) + "..."
                              : item.description}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BodyNewSection;
