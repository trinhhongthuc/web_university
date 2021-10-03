import React from "react";
import BoxContactElement from "./BoxContactElement";
// import icon de su dung
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";

const ContactLive = () => {
  return (
    <div className="contact-live">
      <BoxContactElement IconName={HiOutlineMail} />
      <BoxContactElement IconName={AiFillFacebook} />
      <BoxContactElement IconName={AiFillYoutube} />
      <BoxContactElement IconName={FaFacebookMessenger} />
    </div>
  );
};

export default ContactLive;
