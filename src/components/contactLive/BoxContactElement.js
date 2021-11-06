import React from "react";

const BoxContactElement = ({ IconName, setShowEmail, showEmail }) => {
  return (
    <div
      className="box-contact-element"
      onClick={() => !!setShowEmail && setShowEmail(!showEmail)}
    >
      <IconName />
    </div>
  );
};

export default BoxContactElement;
