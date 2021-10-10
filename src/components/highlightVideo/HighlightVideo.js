import React from "react";
import Heading2 from "./../heading2/Heading2";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 100 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}

const HighlightVideo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="col-xl-5">
      <Heading2 title="Video Nỗi bật" />
      <div className="highlight-video">
        <Slider {...settings}>
          <div className="highlight-video-item">
            <iframe
              src="https://www.youtube.com/embed/4hKRM72tAZM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="highlight-video-item">
            <iframe
              src="https://www.youtube.com/embed/xrMfxJaK45g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="highlight-video-item">
            <iframe
              src="https://www.youtube.com/embed/ZMSIXOvLRsc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="highlight-video-item">
            <iframe
              src="https://www.youtube.com/embed/k2wfa0c_SXA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HighlightVideo;
