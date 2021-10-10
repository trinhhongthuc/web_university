import React from "react";
import Container from "@mui/material/Container";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="row">
          <div className="col-xl-4">
            <div className="footer-wrapper">
              <h2>Thông tin liên hệ</h2>
              <div className="outline-bottom"></div>
              <ul className="footer-ul">
                <li>
                  <RoomIcon />
                  704 Phan Đình Phùng, TP Kon Tum
                </li>

                <li>
                  <LocalPhoneIcon />
                  (84) 02603919997 - 02603913029
                </li>

                <li>
                  <EmailIcon />
                  udck@kontum.udn.vn
                </li>

                <li>
                  <FacebookIcon />
                  https://www.facebook.com/kontum.udn.vn
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="footer-wrapper">
              <h2>Các đơn vị thành viên</h2>
              <div className="outline-bottom"></div>
              <ul className="footer-ul">
                <li>
                  <ArrowForwardIosIcon />
                  Trường đại học kinh tế
                </li>

                <li>
                  <ArrowForwardIosIcon />
                  Trường đại học sư phạm
                </li>

                <li>
                  <ArrowForwardIosIcon />
                  Trường đại học sư phạm kỹ thuật
                </li>

                <li>
                  <ArrowForwardIosIcon />
                  Trường cao đẳng công nghệ thông tin
                </li>
                <li>
                  <ArrowForwardIosIcon />
                  Viện nghiên cứu và đào tạo việt - anh
                </li>
                <li>
                  <ArrowForwardIosIcon />
                  Viện công nghệ quốc tế dniit
                </li>
                <li>
                  <ArrowForwardIosIcon />
                  Trường cao đẳng công nghệ thông tin
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="footer-wrapper">
              <h2>Phân hiệu ĐHĐN tại kon tum</h2>
              <div className="outline-bottom"></div>
              <p className="footer-wrapper-note">
                Phân hiệu Đại học Đà Nẵng tại Kon Tum là một trong 7 trường
                thành viên của Đại học Đà Nẵng. Trường được thành lập vào ngày
                14 tháng 02 năm 2007, có chức năng đào tạo nguồn nhân lực có
                trình độ đại học và sau đại học đa ngành, đa lĩnh vực cho các
                tỉnh Tây Nguyên và các tỉnh vùng Đông nam Lào, Đông bắc
                Campuchia
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
