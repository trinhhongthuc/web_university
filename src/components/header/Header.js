import React from "react";
import Container from "@mui/material/Container";
import Logo from "../../assets/image/LogoUDCK.png";
import bgHeader from "../../assets/image/imgBackgroundInner1.jpg";
import { Link } from "react-router-dom";
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
              <Link to="/" className="header-logo">
                <img src={Logo} alt="" />
              </Link>

              <div className="header-menu">
                <ul className="header-menu-ul">
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/tintuc">Tin Tức</Link>
                  </li>
                  <li>
                    <Link to="/tuyensinh">Tuyển Sinh</Link>
                  </li>
                  <li>
                    <Link to="/daotao">Đào Tạo</Link>
                  </li>

                  <li>
                    <Link to="/sinhvien">Sinh Viên</Link>
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
