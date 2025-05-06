import React from 'react';

const Status = () => {
    return(
        <div className="status-container-wrap">
            <div className="status-title">나의 주문 현황</div>
            <div className="status-container">
                <div className="status-section">
                    <div className="status-name">입금완료</div>
                    <div>1</div>
                </div>
                <div className="status-section">
                    <div className="status-name">배송중</div>
                    <div>10</div>
                </div>
                <div className="status-section">
                    <div className="status-name">배송완료</div>
                    <div>100</div>
                </div>
                <div className="status-section">
                    <div className="status-name">주문취소</div>
                    <div>0</div>
                </div>
            </div>
        </div>
    )
};

export default Status;