import React from "react";
import Container from "@mui/material/Container";
import Logo from "../../assets/image/LogoUDCK.png";
import bgHeader from "../../assets/image/imgBackgroundInner1.jpg";
const Header = () => {
  return (
    <header
      className="header"
      style={{ backgroundImage: "url(" + bgHeader + ")" }}
    >
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="header-wrapper">
              <div className="header-logo">
                <img src={Logo} alt="" />
              </div>

              <div className="header-menu">
                <ul className="header-menu-ul">
                  <li>
                    <a href="#">Tin Tức</a>
                  </li>
                  <li>
                    <a href="#">Sự Kiện</a>
                  </li>
                  <li>
                    <a href="#">Nghiên Cứu</a>
                  </li>
                  <li>
                    <a href="#">Đào Tạo</a>
                  </li>
                  <li>
                    <a href="#">Đối Ngoại</a>
                  </li>
                  <li>
                    <a href="#">Sinh Viên</a>
                  </li>
                  <li>
                    <a href="#">Ngôn Ngữ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
