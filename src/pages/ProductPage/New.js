import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from '../../component/PayModal';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const New = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
        const [currentPage, setCurrentPage] = useState(1);
        const [isModalOpen, setModalOpen] = useState(false);
        const [cookies] = useCookies(['accessToken']);
        
    
        const itemsPerPage = 10;
    
        const totalPages = Math.ceil(products.length / itemsPerPage);
    
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentProducts = products.slice(startIndex, endIndex);
    
        const handleCardClick = (product) => {
            setSelectedProduct(product);
            if(typeof cookies.accessToken !== "string"){
                alert("로그인이 필요합니다");
                return;
            }
            setModalOpen(true);
        };
    
        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

        const handleCloseModal = () => {
            setSelectedProduct(null);
            setModalOpen(false);
            };
            useEffect(() => {
            axios
            .get("/categories/3/items", {
            headers: {
                accept: "*/*",
                
            },
            })
            .then((response) => {
                setProducts(response.data.result);
            })
            .catch((err)=>{
            console.log("CATEGORY API 요청 실패", err);
            });
        }, []);

    return(
        <div>
           <Banner title="New" imagePath={"/banner_new.png"} />
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onClick={() => handleCardClick(product)}
                        />
                    ))}
                </div>
            </div>
            <div className="paging">
                    {currentPage > 1 && (
                        <button 
                            className='paging-button'
                            onClick={()=> handlePageChange(currentPage - 1 )}
                        >
                            Prev
                        </button>
                    )}
                    {Array.from({ length: totalPages}, (_, i) => i + 1).map(
                        (pageNumber) => (
                            <button 
                                className={`paging-button ${currentPage === pageNumber ? "active": ""}`}
                                key={pageNumber}
                                onClick={()=> handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )
                    )}
                    {currentPage < totalPages && (
                        <button 
                            className='paging-button'
                            onClick={()=> handlePageChange(currentPage + 1 )}
                        >
                            Next
                        </button>
                    )}
            </div>
            {isModalOpen && (<PayModal product={selectedProduct} onClose={handleCloseModal}/>)}

        </div>
    );
};

export default New;
