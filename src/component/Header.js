import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () =>{
    const location = useLocation();
    const currentPage = location.pathname;
    return (
            <header className={`header-container ${currentPage === "/mypage" ? "mypage-style" : ""}`}>
                <div className="header-logo">
                        <Link to="/" className={currentPage === "/" ? "active" : ""}>
                            LIKELION
                        </Link>
                </div>
                <div className="header-menus">
                    <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
                        New
                    </Link>
                    <Link to="/perfume" className={currentPage === "/perfume" ? "active" : ""}>
                        Perfume
                    </Link>
                    <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : ""}>
                        Diffuser
                    </Link>
                    <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}>
                        Mypage
                    </Link>
                </div>
            </header>
      
    );
};

export default Header;