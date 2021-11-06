import React, { useState } from "react";
import BoxContactElement from "./BoxContactElement";
// import icon de su dung
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { Link } from "react-router-dom";
import LogoUDCK from "../../assets/image/LogoUDCK.png";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
const ContactLive = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <div className="contact-live">
        <a
          href="https://www.youtube.com/c/UDCKchannel"
          target="_blank"
          rel="noopener"
        >
          {" "}
          <BoxContactElement IconName={AiFillYoutube} />
        </a>
        <a
          href="https://www.facebook.com/kontum.udn.vn"
          target="_blank"
          rel="noopener"
        >
          {" "}
          <BoxContactElement IconName={AiFillFacebook} />
        </a>
        <div style={{ position: "relative" }}>
          <BoxContactElement
            IconName={HiOutlineMail}
            setShowEmail={setShowEmail}
            showEmail={showEmail}
          />
          {showEmail ? (
            <div className="box-mail">
              <div className="box-wrapper">
                <h4>Email Address:</h4>
                <p>udck@kontum.udn.vn</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <BoxContactElement
          IconName={FaFacebookMessenger}
          setShowEmail={setShowMessage}
          showEmail={showMessage}
        />
      </div>

      {showMessage ? (
        <div className="message-now">
          <div className="message-now-header">
            <div className="message-now-header-icon">
              <img src={LogoUDCK} alt="" />
            </div>
            <h3>Message with UDCKers</h3>

            <div
              className="message-now-header-close"
              onClick={() => setShowMessage(!showMessage)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="message-now-content mt-5">
            <div className="message-now-content-avatar mt-3 mb-2">
              <img src={LogoUDCK} alt="" />
            </div>
            <h3>Welcome to UDCKers</h3>
          </div>
          <div className="message-now-input-text">
            <input name="" id="" />
            <div className="icon-send">
              <SendIcon />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ContactLive;
