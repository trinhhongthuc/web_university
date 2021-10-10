import Container from "@mui/material/Container";
import React from "react";
import Heading2 from "./../heading2/Heading2";
import img from "../../assets/image/banner/banner_2.png";

const WorkingStudent = () => {
  return (
    <div className="working-student">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <Heading2 title="hoạt động sinh viên" />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-7">
            <div className="working-student-wrapper">
              <h3 className="wrapper-title">Câu lạc bộ và cộng đồng</h3>

              <div className="wrapper-content">
                <div className="wrapper-content-img">
                  <img src={img} alt="" />
                </div>

                <p className="wrapper-content-text">
                  Khi lại gần, họ xác định có 1 người phụ nữ và hai cháu bé gái.
                  Có vẻ như cả 3 người đều đã lịm đi. Nhanh chóng, các chiến sỹ
                  công an đưa 3 người trên đi bệnh viện. Nhưng cuộc chạy đua của
                  họ đã không thể thắng được tử thần.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="working-student-wrapper">
              <h3 className="wrapper-title">Thư viện hình ảnh</h3>

              <div className="wrapper-photo">
                <div className="wrapper-photo-img">
                  <img
                    src="https://static.vnuhcm.edu.vn/images/20190930/6d237101db815f0d86a27b522196a0f4.JPG"
                    alt=""
                  />
                  <p>
                    Lễ khánh thành Không gian truyền thống phong trào học sinh,
                    sinh viên Sài Gòn - Gia Định - TP. Hồ Chí Minh
                  </p>
                </div>

                <div className="wrapper-photo-img">
                  <img
                    src="https://static.vnuhcm.edu.vn/images/20190930/6d237101db815f0d86a27b522196a0f4.JPG"
                    alt=""
                  />
                  <p>
                    Lễ khánh thành Không gian truyền thống phong trào học sinh,
                    sinh viên Sài Gòn - Gia Định - TP. Hồ Chí Minh
                  </p>
                </div>

                <div className="wrapper-photo-img">
                  <img
                    src="https://static.vnuhcm.edu.vn/images/20190930/6d237101db815f0d86a27b522196a0f4.JPG"
                    alt=""
                  />
                  <p>
                    Lễ khánh thành Không gian truyền thống phong trào học sinh,
                    sinh viên Sài Gòn - Gia Định - TP. Hồ Chí Minh
                  </p>
                </div>

                <div className="wrapper-photo-img">
                  <img
                    src="https://static.vnuhcm.edu.vn/images/20190930/6d237101db815f0d86a27b522196a0f4.JPG"
                    alt=""
                  />
                  <p>
                    Lễ khánh thành Không gian truyền thống phong trào học sinh,
                    sinh viên Sài Gòn - Gia Định - TP. Hồ Chí Minh
                  </p>
                </div>
                <div className="wrapper-photo-img">
                  <img
                    src="https://static.vnuhcm.edu.vn/images/20190930/6d237101db815f0d86a27b522196a0f4.JPG"
                    alt=""
                  />
                  <p>
                    Lễ khánh thành Không gian truyền thống phong trào học sinh,
                    sinh viên Sài Gòn - Gia Định - TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkingStudent;
