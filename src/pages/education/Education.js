import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { ReactComponent as University } from "../../assets/image/university-solid.svg";
import { ReactComponent as Student } from "../../assets/image/student.svg";
import AOS from "aos";

const Education = () => {
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
            <div class="title_header_content">
              <h3>
                <span>Đào tạo</span>
              </h3>
            </div>

            <div className="education-wrapper-information">
              <h3 className="education-wrapper-information-heading">
                Phân hiệu Đại học Đà Nẵng tại Kon Tum
              </h3>
              <p className="education-wrapper-information-content">
                <strong> Phân hiệu Đại học Đà Nẵng tại Kon Tum</strong> (tên
                tiếng Anh: Campus of the University of Da Nang in Kon Tum) là
                một trong 7 trường thành viên của Đại học Đà Nẵng. Trường được
                thành lập vào ngày 14 tháng 02 năm 2007, có chức năng đào tạo
                nguồn nhân lực có trình độ đại học và sau đại học đa ngành, đa
                lĩnh vực cho các tỉnh Tây Nguyên và các tỉnh vùng Đông nam Lào,
                Đông bắc Campuchia.
              </p>
            </div>

            <div className="education-wrapper-information">
              <h3 className="education-wrapper-information-heading">
                Mục tiêu
              </h3>
              <p className="education-wrapper-information-content">
                Phát triển cộng đồng: Phân hiệu đào tạo vì sự phát triển cộng
                đồng các dân tộc trên vùng đất Tây Nguyên.
              </p>

              <p className="education-wrapper-information-content">
                Hợp tác cùng phát triển: Phân hiệu Đại học Đà Nẵng tại Kon Tum
                là thành viên của Đại học Đà Nẵng, coi trọng việc hợp tác với
                các trường thành viên thuộc Đại học Đà Nẵng. Phân hiệu cũng sẽ
                hợp tác chặt chẽ với các trường cao đẳng, đại học và các cộng
                đồng kinh doanh trên vùng đất Tây Nguyên. Tất cả mọi sự hợp tác
                vì sự phát triển bền vững.
              </p>

              <p className="education-wrapper-information-content">
                Thực tế và hữu hiệu: Phân hiệu sẽ thường xuyên tìm hiểu nhu cầu
                khu vực để xây dựng cơ cấu ngành đào tạo, chương trình học phù
                hợp với nhu cầu phát triển của Tây Nguyên. Đào tạo nguồn nhân
                lực có khả năng vận dụng các kiến thức đã học vào việc cải tiến
                đời sống lao động của cộng đồng các dân tộc trên vùng đất Tây
                Nguyên.
              </p>
            </div>

            <div className="education-wrapper-information">
              <h3 className="education-wrapper-information-heading">
                Quy mô và Hệ thống đào tạo
              </h3>
              <p className="education-wrapper-information-content">
                Phân hiệu tuyển sinh hàng năm với quy mô từ 400 đến 500 sinh
                viên hệ chính quy. Dựa trên thế mạnh của Đại học Đà Nẵng - đại
                học đa ngành trọng điểm quốc gia, Phân hiệu Đại học Đà Nẵng tại
                Kon Tum từng bước mở rộng các chuyên ngành đào tạo phù hợp với
                nhu cầu phát triển kinh tế và xã hội của các tỉnh Tây Nguyên.
              </p>

              <p className="education-wrapper-information-content">
                Phân hiệu chiêu sinh 17 chuyên ngành đào tạo thuộc 4 trường đại
                học thành viên của Đại học Đà Nẵng là trường Đại học Bách khoa,
                trường Đại học Kinh tế, trường Đại học Sư phạm và trường Đại học
                Ngoại ngữ. Ngoài đào tạo hệ đại học, Phân hiệu mở các khoá đào
                tạo sau đại học nhằm đáp ứng nhu cầu phát triển nguồn nhân lực
                của Tây Nguyên.
              </p>

              <p className="education-wrapper-information-content">
                Các chuyên ngành đào tạo đại học:
              </p>

              <ul>
                <li>Kỹ thuật điện - điện tử</li>
                <li>Công nghệ Thông tin</li>
                <li>Công nghệ sinh học</li>
                <li>Kỹ thuật xây dựng</li>
                <li>Kỹ thuật xây dựng công trình giao thông</li>
                <li>Kinh tế Xây dựng</li>
                <li>Kế toán</li>
                <li>Kiểm toán</li>
                <li>Kinh tế Phát triển</li>
                <li>Quản trị Kinh doanh</li>
                <li>Quản lý nhà nước</li>
                <li>Quản trị dịch vụ du lịch và lữ hành</li>
                <li>Tài chính - Ngân hàng</li>
                <li>Tài chính Doanh nghiệp</li>
                <li>Sư phạm Giáo dục Tiểu học</li>
                <li>Luật kinh tế</li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 mt-3"
            data-aos="fade-left"
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

export default Education;
