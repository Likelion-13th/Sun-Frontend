//pages 안에 page 별로 폴더가 있음.

//React - javascript 에서 html을 쓸 수 있게 해줌.
import React from 'react';

const Home = () => {
    return(
        <div>
            <h1>야 너두 사장될 수 있어!</h1>
            <p>멋쟁이 사자처럼 13기</p>
        </div>
    )
};

//export 를 통해 다른 파일에서 import로 사용가능. 
export default Home;