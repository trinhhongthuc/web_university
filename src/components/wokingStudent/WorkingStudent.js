import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import Heading2 from "./../heading2/Heading2";
import img from "../../assets/image/banner/banner_2.png";
import tvimg1 from "../../assets/image/tvimg1.jfif";
import tvimg2 from "../../assets/image/tvimg2.jpg";
import tvimg4 from "../../assets/image/tvimg4.jpg";
import tvimg5 from "../../assets/image/tvimg5.jpg";
import tvimg6 from "../../assets/image/tvimg6.jpg";
import tv7 from "../../assets/image/tv7.jpg";
import tvimg8 from "../../assets/image/tvimg8.jfif";
import clb1 from "../../assets/image/clb1.jpg";
import tvimg3 from "../../assets/image/tvimg3.jfif";
import AOS from "aos";

const WorkingStudent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="working-student mb-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
                  <img src={clb1} alt="" />
                </div>

                <p className="wrapper-content-text">
                  Một ngày hội giao lưu đúng nghĩa và tuyệt vời của các thành
                  viên trong ngôi nhà chung Khoa Kỹ thuật - Nông nghiệp UD-CK đã
                  khép lại với bao nụ cười, sự nhiệt tình tham gia các trò chơi,
                  văn nghệ của các bạn sinh viên cũng như cán bộ, giảng viên
                  trong Khoa.
                </p>
                <p className="wrapper-content-text">
                  Chúng ta đã có nhiều khoảnh khắc vui vẻ, hào hứng, sẻ chia,
                  phân công nhau hoàn thành tốt các nhiệm vụ được giao để có
                  được một buổi giao lưu hoành tráng mà theo nhận định của các
                  bạn sinh viên là "CHƯA BAO GIỜ EM ĐƯỢC VUI NHƯ THẾ!!!".
                </p>

                <p className="wrapper-content-text">
                  Hi vọng trong thời gian đến, những chương trình của Khoa sẽ
                  luôn nhận được sự hưởng ứng mạnh mẽ từ chính các bạn. Để tinh
                  thần đồng đội, tính gắn kết giữa sinh viên cũ và mới, giữa
                  sinh viên các ngành và giữa sinh viên với giảng viên trong
                  Khoa sẽ luôn bền chặt, đưa vị thế của Khoa Kỹ thuật - Nông
                  nghiệp của chúng ta ngày một phát triển hơn nữa.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="working-student-wrapper">
              <h3 className="wrapper-title">Thư viện hình ảnh</h3>

              <div className="wrapper-photo">
                <div className="wrapper-photo-img">
                  <img src={tvimg1} alt="" />
                  <p>Ngày hội văn hóa đọc</p>
                </div>

                <div className="wrapper-photo-img">
                  <img src={tvimg2} alt="" />
                  <p>
                    UDCK Tổ chức ngày hội hiến máu tình nguyện đợt 1 năm 2021
                  </p>
                </div>

                <div className="wrapper-photo-img">
                  <img src={tvimg3} alt="" />
                  <p>Chung kết cuộc thi "Tìm hiểu về luật kế toán - thuế"</p>
                </div>

                <div className="wrapper-photo-img">
                  <img src={tvimg4} alt="" />
                  <p>
                    Đại học đà nẵng công bố quyết định bổ nhiệm lãnh đạo phân
                    hiệu ĐHĐN
                  </p>
                </div>
                <div className="wrapper-photo-img">
                  <img src={tvimg5} alt="" />
                  <p>
                    Hội nghị quản lý đào tạo sinh viên người dân tộc thiểu số
                  </p>
                </div>
                <div className="wrapper-photo-img">
                  <img src={tvimg6} alt="" />
                  <p>Chào mừng ngày nhà giáo việt nam 20/11</p>
                </div>

                <div className="wrapper-photo-img">
                  <img src={tv7} alt="" />
                  <p>Chương trình mùa hè khởi nghiệp</p>
                </div>

                <div className="wrapper-photo-img">
                  <img src={tvimg8} alt="" />
                  <p>UDCK summer school </p>
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
