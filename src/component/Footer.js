import React from 'react';
import "../styles/Footer.css";

const Footer = () =>{
    return (
        <div className="footer-container">
            <div className="footer-section">
                <div className="footer-title">LIKELION PROCESS</div>
                <div className="footer-subtitle">멋쟁이사자처럼은 창업 동아리이므로 실제 상품을 판매하지 않으며 연출된 페이지 입니다람쥐</div>
            </div>
            <div className="footer-section"> 
                <div className="info-text-row">
                    <div className="info-text-wrapper">
                        <div className="info-text-1">상호명</div>
                        <div className="info-text-2">멋쟁이사자처럼</div>
                    </div>

                    <div className="info-text-wrapper">
                        <div className="info-text-1">대표</div>
                        <div className="info-text-2">쥐선</div>
                    </div>

                    <div className="info-text-wrapper">
                        <div className="info-text-1">사업자등록번호</div>
                        <div className="info-text-2">123-45-567</div>
                    </div>

                    <div className="info-text-wrapper">
                        <div className="info-text-1">상호명</div>
                        <div className="info-text-2">멋쟁이사자처럼</div>
                    </div>

                    <div className="info-text-wrapper">
                        <div className="info-text-1">주소</div>
                        <div className="info-text-2">한국항공대학교 어딘가</div>
                    </div>

                </div>

                <div className="info-text-row">
                    <div className="info-text-wrapper">
                        <div className="info-text-1">내 전화</div>
                        <div className="info-text-2">010-2345-6346</div>
                    </div>

                    <div className="info-text-wrapper">
                        <div className="info-text-1">개인정보보호책임자</div>
                        <div className="info-text-2">나</div>
                    </div>

                    <div className="info-text-wrapper">
                        <div className="info-text-1">입금계좌</div>
                        <div className="info-text-2">우리 120391039</div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;

//모든 화면에 보여야 하므로 app.js 에 import 