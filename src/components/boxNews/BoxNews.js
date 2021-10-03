import React from "react";
import { AiOutlineFieldTime } from "@react-icons/all-files/ai/AiOutlineFieldTime";

const BoxNews = () => {
  return (
    <div className="col-xl-4">
      <div className="box-news-container">
        <div className="img">
          <img
            src="http://www.kontum.udn.vn/images/group_images/img_1620702042.JPG"
            alt=""
          />
        </div>
        <a href="/" className="description">
          Sinh viên Tự nhiên thức xuyên đêm dự thi Vòng Chung kết ICPC 2021
        </a>

        <div className="datetime">
          {" "}
          <div className="datetime-icons">
            <AiOutlineFieldTime />
          </div>
          <p className="datetime-text">12/12/2021</p>
        </div>
      </div>
    </div>
  );
};

export default BoxNews;
