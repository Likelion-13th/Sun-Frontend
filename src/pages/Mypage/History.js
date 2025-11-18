import React from 'react';

const History = ({ historyData, onCancel}) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount)
    }

     const formatDate = (isoString) => {
        if (!isoString) return '';
        return isoString.slice(0, 10);
    };

    const sortedHistory = (historyData || []).slice().sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // 내림차순
    });

    return(
        <div className="history-container-wrap">
            <div className="history-title">나의 쇼핑 내역</div>
            <div className="history-container">
                <table className="history-table" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>주문 일자</th>
                            <th>상품 정보</th>
                            <th>수량</th>
                            <th>구매 금액</th>
                            <th>상태</th>
                            <th>주문 취소</th>
                        </tr>
                    </thead>
                    <tbody>
                         {sortedHistory && sortedHistory.length > 0 ? (
                            sortedHistory.map((item) => (
                                <tr key={item.orderId}>
                                    <td>{formatDate(item.createdAt)}</td>
                                    <td>{item.itemName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{formatCurrency(item.totalPrice)}원</td>
                                    <td>{item.status}</td>
                                    <td>
                                        {item.status === 'PROCESSING' ? (
                                            <div className="history-cancel">
                                                <div 
                                                    className="history-cancel-button"
                                                    onClick={() => onCancel(item.orderId)}
                                                >
                                                    취소
                                                </div>
                                            </div>
                                        ) : (
                                            <span>-</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">주문 내역이 없습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default History;