import React from "react";
import bg from "../../assets/image/bnw3.jpg";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const Welcome = ({ setShowNow }) => {
  const onHandleChange = (e) => {
    if (e.target.className === "welcome") setShowNow(false);
  };
  return (
    <div className="welcome" onClick={(e) => onHandleChange(e)}>
      <div className="welcome-wrapper">
        <div
          className="welcome-wrapper-close"
          onClick={(e) => setShowNow(false)}
        >
          <HighlightOffIcon />
        </div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
