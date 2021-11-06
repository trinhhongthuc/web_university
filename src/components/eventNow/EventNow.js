import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Heading2 from "./../heading2/Heading2";

const EventNow = () => {
  const data = [
    {
      day: "03",
      month: "thang 11",
      description:
        "Gặp gỡ UDCKers là đại điện tham gia chương trình “Giao lưu hữu nghị thanh niên Việt Nam - Lào – Campuchia” ",
      time: "16:00 - 17:00",
    },

    {
      day: "03",
      month: "thang 11",
      description:
        "UDCK tiếp tục triển khai dạy và học trực tuyến để ứng phó với dịch Covid-19 ",
      time: "09:20 - 11:00",
    },

    {
      day: 29,
      month: "thang 10",
      description:
        "Sở Kế hoạch và Đầu tư tỉnh Kon Tum phối hợp với UDCK tổ chức chương trình tập huấn trực tuyến “Lập dự án khởi nghiệp 2021” ",
      time: "16:00 - 17:00",
    },

    {
      day: "26",
      month: "thang 10",
      description:
        "Tạp chí Khoa học và Công nghệ Đại học Đà Nẵng được đưa vào Hệ thống trích dẫn Đông Nam Á (ACI)",
      time: "14:30 - 16:00",
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

                    <p className="wrapper-time mt-3">
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
