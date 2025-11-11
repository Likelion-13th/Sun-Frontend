import React from "react";
import axios from 'axios';
import "../styles/ToolBar.css";
import {useCookies} from "react-cookie";

// 백엔드 API URL 설정
const API_BASE_URL = process.env.NODE_ENV === "development"
  ? ""  // 개발환경: proxy 사용 (package.json의 proxy가 작동)
  : "http://sajang-dev-env.eba-5jnyte69.ap-northeast-2.elasticbeanstalk.com";  // 프로덕션: 백엔드 직접 호출

const ToolBar = ({isLogin, onLoginChange}) => { 
  const [cookies, removeCookie] = useCookies(["accessToken"]);

  const handleLogout = () => {
    axios
    .delete(`${API_BASE_URL}/users/logout`, {
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

    const oauthUrl =
      "http://sajang-dev-env.eba-5jnyte69.ap-northeast-2.elasticbeanstalk.com/oauth2/start/kakao" +
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