import React from "react";
import { a } from "react-router-dom";
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import { GoMortarBoard } from "@react-icons/all-files/go/GoMortarBoard";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";
import { FaRegAddressCard } from "@react-icons/all-files/fa/FaRegAddressCard";

export const Training = () => {
  const styleDefault = {
    backgroundColor: "#2499dc",
    color: "#fff",
  };

  return (
    <div className="container">
      <ul className="training-list">
        <li className="training-list-item">
          <a href="/training" id="test">
            <div className="training-list-item-icons">
              <FaUniversity />
            </div>

            <p className="training-list-item-title">Đại học</p>
          </a>
        </li>
        <li className="training-list-item other">
          <a href="/training">
            <div className="training-list-item-icons">
              <GoMortarBoard />
            </div>

            <p className="training-list-item-title">
              Đăng ký xét tuyển/nhập học
            </p>
          </a>
        </li>
        <li className="training-list-item">
          <a href="/training">
            <div className="training-list-item-icons">
              <AiOutlineArrowUp />
            </div>

            <p className="training-list-item-title">liên thông Lên đại học</p>
          </a>
        </li>
        <li className="training-list-item other">
          <a href="/training">
            <div className="training-list-item-icons">
              <FaRegAddressCard />
            </div>

            <p className="training-list-item-title">sau Đại học</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
