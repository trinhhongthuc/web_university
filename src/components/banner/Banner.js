import React from "react";
import Slider from "infinite-react-carousel";
import banner_1 from "../../assets/image/banner/banner_1.jpg";
import banner_2 from "../../assets/image/banner/banner_2.png";
import banner_3 from "../../assets/image/banner/banner_3.jpg";
import banner_4 from "../../assets/image/banner/banner_4.jpg";

const Banner = () => {
  return (
    <Slider
      dots
      autoplaySpeed={150}
      duration={10}
      style={{ height: "350px" }}
      adaptiveHeight={true}
    >
      <div className="slide-container">
        <img className="slide-image" src={banner_1} alt={banner_1} />
        <div className="slide-container-content">
          <div className="container">
            <p className="content-text">Đại học ĐN phân hiệu Kon tum</p>
          </div>
        </div>
      </div>
      <div className="slide-container">
        <img className="slide-image" src={banner_2} alt={banner_2} />
        <div className="slide-container-content">
          <div className="container">
            <p className="content-text">Đại học ĐN phân hiệu Kon tum</p>
          </div>
        </div>
      </div>
      <div className="slide-container">
        <img className="slide-image" src={banner_3} alt={banner_3} />
        <div className="slide-container-content">
          <div className="container">
            <p className="content-text">Đại học ĐN phân hiệu Kon tum</p>
          </div>
        </div>
      </div>
      <div className="slide-container">
        <img className="slide-image" src={banner_4} alt={banner_4} />
        <div className="slide-container-content">
          <div className="container">
            <p className="content-text">Đại học ĐN phân hiệu Kon tum</p>
          </div>
        </div>
      </div>
      <div className="slide-container">
        <img className="slide-image" src={banner_4} alt={banner_1} />
        <div className="slide-container-content">
          <div className="container">
            <p className="content-text">Đại học ĐN phân hiệu Kon tum</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
