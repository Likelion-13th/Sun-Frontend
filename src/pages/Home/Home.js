//pages 안에 page 별로 폴더가 있음.

//React - javascript 에서 html을 쓸 수 있게 해줌.
import React from 'react';
import Menu from "./Menu";
import Banner from "./Banner";
import Info from "./Info";
import "../../styles/Home.css";

const Home = () => {
    return(
        <div className="home-container">
            <Banner />
            <Menu />
            <Info />
        </div>
    )
};

//export 를 통해 다른 파일에서 import로 사용가능. 
export default Home;