import React from "react";

const Info = () => {
    return(
        <div className="info-container">
            <div className="info-left">
                <img
                    src={`${process.env.PUBLIC_URL}/img/about_us.png`}
                    alt="perfume"
                    className="menu-perfume"
                />
                <div className="info-left-text">ABOUT US</div>
            </div>
            <div className="info-right">
                <div className="info-themetext">
                    자연과의 공존,
                    <br />
                    지속 가능한 아름다움을 향하여
                </div>
                <div className="info-maintext">
                    <div>
                        '멋쟁이사자처럼'의 향수와 디퓨저는
                        <br />
                        자연에서 영감을 받아 엄선된 원료만을 사용해 만들어졌습니다.
                    </div>
                    <div>
                        환경을 지키기 위한 노력으로 지속 가능한 제조 공정을 체택하며,
                        <br />
                        재활용 가능한 친환경 패키지를 사용합니다.
                    </div>
                    <div>단순한 향기가 아닌, 지구를 위한 작은 실천과 아름다움을 담아냅니다.</div>
                    <div>지금, 자연과 함께하는 향기를 경험해보세요.</div>
                </div>
            </div>
        </div>
    );
};

export default Info;