import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import img1 from "../../assets/image/news_top_banner.jpg";
import img2 from "../../assets/image/news_2.jpg";
import img23 from "../../assets/image/new-23.jpg";
import img25 from "../../assets/image/new-25.jpg";
import img24 from "../../assets/image/new-24.jfif";
import AOS from "aos";

const NewTopSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div className="row mt-3 mb-3 pb-3">
        <div
          className="col-xl-8"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="new-top-section-wrapper">
            <img src={img23} alt="" />
            <div className="wrapper-opacity-new">
              UDCK ký kết Chương trình phối hợp giai đoạn 2021-2025
            </div>
          </div>
        </div>
        <div
          className="col-xl-4"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <ul className="new-top-section-ul">
            <li className="new-top-section-ul-li">
              <img src={img24} alt="" />
              <div className="new-top-section-ul-li-opacity">
                UD-CK tổ chức đón lưu học sinh Lào về học tại Phân hiệu
              </div>
            </li>

            <li className="new-top-section-ul-li">
              <img src={img25} alt="" />
              <div className="new-top-section-ul-li-opacity">
                Lãnh đạo UDCK làm việc với huyện Kon Plông về việc tăng cường
                quan hệ hợp tác trong đào tạo và chuyển giao khoa học công nghệ
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default NewTopSection;
