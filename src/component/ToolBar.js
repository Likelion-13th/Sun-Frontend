import React from "react";
import axios from 'axios';
import "../styles/ToolBar.css";
import {useCookies} from "react-cookie";

const ToolBar = ({isLogin, onLoginChange}) => { 
  const [cookies, removeCookie] = useCookies(["accessToken"]);
  const BACKEND_URL = 'http://sajang-dev-env.eba-5jnyte69.ap-northeast-2.elasticbeanstalk.com';

  const handleLogout = () => {
    axios
    .delete(`${BACKEND_URL}/users/logout`, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    })
    .then(() => {
       onLoginChange(false);
	    removeCookie("accessToken", { path: "/" });
    })
    .catch((err)=>{
      console.log("LOGOUT API 요청 실패", err);
    });
  };

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
  };

  const MoveToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleLoginRedirect = () => {
    const redirectUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://sun-shop.netlify.app";

    // ✅ 변경된 진입 경로: /oauth2/start/kakao
    const oauthUrl =
      "http://Sajang-dev-env.eba-5jnyte69.ap-northeast-2.elasticbeanstalk.com/oauth2/start/kakao" +
      `?redirect_uri=${encodeURIComponent(redirectUrl)}`;

    window.location.href = oauthUrl;
  };

  return (
    <div className="toolbar-container">
      <img
        src={isLogin 
          ? `${process.env.PUBLIC_URL}/icon/icon_logout.svg`
          : `${process.env.PUBLIC_URL}/icon/icon_login.svg`}
        alt="login"
        className="toolbar-icon"
        onClick={ isLogin ? handleLogout : handleLoginRedirect}
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

export default ToolBar;