import React from "react";
import "../styles/ToolBar.css";

const ToolBar = () => {
  return (
    <div className="toolbar-container">
      <img
        src={`${process.env.PUBLIC_URL}/icon/icon_login.svg`}
        alt="login"
        className="toolbar-icon"
        onClick={handleLLoginRedirect}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/icon/icon_recent.svg`}
        alt="recent"
        className="toolbar-icon"
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/icon/icon_up.svg`}
        alt="up"
        className="toolbar-icon"
        onClick={MoveToTop}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/icon/icon_down.svg`}
        alt="down"
        className="toolbar-icon"
        onClick={MoveToBottom}
      ></img>
    </div>
  );
};

const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
};

const MoveToBottom = () => {
window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

const handleLLoginRedirect = () => {
  const redirectUrl = 'http://localhost:3000';

  const oauthUrl = `http://Sajang-dev-env.eba-5jnyte69.ap-northeast-2.elasticbeanstalk.com/oauth2/start/kakao?redirect_uri=${encodeURI(redirectUrl)}`;

  window.location.href = oauthUrl;
};

export default ToolBar;