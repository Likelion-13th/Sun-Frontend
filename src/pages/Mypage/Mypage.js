import React, { useState, useEffect, useCallback } from 'react';
import "../../styles/Mypage.css";
import Profile from "./Profile";
import Status from "./Status";
import Address from "./Address";
import History from "./History";
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Mypage = () => {
    const [cookies] = useCookies(["accessToken"]);
    const [profileData, setProfileData] = useState({});
    const [orderStatusData, setOrderStatusData] = useState({});
    const [addressInfo, setAddressInfo] = useState({});
    const [historyData, setHistoryData] = useState([]);

    const handleSave = async(zipcode, address, addressDetail) => {
        try{
            const response = await axios.post(
                "/users/address",
                {
                    "zipcode": zipcode,
                    "address": address,
                    "addressDetail": addressDetail
                },
                {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );
            if(response.data.isSuccess){
                alert("주소가 성공적으로 저장되었습니다.");
            } else{
                alert(`주소 저장 실패: ${response.data.message}`);
            }
        } catch(error){
            console.error("주소 저장 오류:", error);
            alert("주소 저장 중 오류가 발생했습니다.");
        }
    };

    const fetchHistoryData = useCallback(async () => {
        try{
            const response = await axios.get(
                "/orders",
                {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );
            if(response.data.isSuccess){
                setHistoryData(response.data.result);
            } else{
                alert(`주문 내역 조회 실패: ${response.data.message}`);
            }
        } catch(error){
            console.error("주문 내역 조회 오류:", error);
            alert("주문 내역 조회 중 오류가 발생했습니다.");
        }
    }, [cookies.accessToken]); 

    const onCancel = async(orderId) => {
        try{
            const response = await axios.put(
                `/orders/${orderId}/cancel`,
                {},
                {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.accessToken}`,
                    },
                }
            );
            if(response.data.isSuccess){
                alert("주문이 성공적으로 취소되었습니다.");
                fetchHistoryData();
            } else{
                alert(`주문 취소 실패: ${response.data.message}`);
            }
        } catch(error){
            console.error("주문 취소 오류:", error);
            alert("주문 취소 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        axios
            .get("/users/profile", {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${cookies.accessToken}`,
                },
            })
            .then((response)=>{
                setProfileData({
                    usernickname: response.data.result.usernickname,
                    recentTotal: response.data.result.recentTotal,
                    maxMileage: response.data.result.maxMileage,
                });
                setOrderStatusData(response.data.result.orderStatusCounts);

                setAddressInfo({
                    zipcode: response.data.result.zipcode,
                    address: response.data.result.address,
                    addressDetail: response.data.result.addressDetail,
                });
            })
            .catch((err) => {
                console.log("API 요청 실패:", err);
            });
            fetchHistoryData();
    }, [cookies.accessToken, fetchHistoryData]);

    return(
        <div className="page-container">
            <Profile profileData={profileData}/>
            <Status orderStatusData={orderStatusData}/>
            <Address handleSave={handleSave} addressInfo={addressInfo}/>
            <History historyData={historyData} onCancel={onCancel}/>
        </div>
    )
};

export default Mypage;