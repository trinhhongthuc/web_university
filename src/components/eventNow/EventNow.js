import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Heading2 from "./../heading2/Heading2";

const EventNow = () => {
  const data = [
    {
      day: 29,
      month: "thang 9",
      description:
        "Tọa đàm “Bảo vệ môi trường và ứng phó với biến đổi khí hậuvùng đồng bằng",
      time: "08:00 - 00:00",
    },

    {
      day: 29,
      month: "thang 9",
      description:
        "Tọa đàm “Xây dựng chuỗi giá trị ngành và sản phẩm vùng đồng bằng sông ",
      time: "13:00 - 16:00",
    },

    {
      day: 29,
      month: "thang 9",
      description:
        "HỘI THẢO TRỰC TUYẾN “ĐÁNH GIÁ HOẠT ĐỘNG HỌC TẬP TRONG DẠY HỌC ",
      time: "08:00 - 12:00",
    },

    {
      day: 29,
      month: "thang 9",
      description:
        "HỘI THẢO KHOA HỌC “ĐỊNH HƯỚNG PHÁT TRIỂN NGUỒN NHÂN LỰC PHỤC ",
      time: "07:30 - 11:00",
    },
  ];
  return (
    <>
      <div className="col-xl-7">
        <Heading2 title="Sự kiện nỗi bật" />
        <ul className="event-now-ul">
          {data &&
            data.map((itemValue, index) => (
              <li className="event-now-li">
                <div className="event-now">
                  <div className="event-now-day">
                    <h4>{itemValue.day}</h4>
                    <p>{itemValue.month}</p>
                  </div>

                  <div className="event-now-wrapper">
                    <p className="wrapper-description">
                      {itemValue.description.length > 50
                        ? itemValue.description.slice(0, 45) + "... "
                        : itemValue.description}
                    </p>

                    <p className="wrapper-time">
                      <AccessTimeIcon />
                      <span>{itemValue.time}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default EventNow;
