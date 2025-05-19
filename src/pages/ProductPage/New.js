import React, { useState } from 'react';
import Banner from './Banner';
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from '../../component/PayModal';
import Diffuser from './Diffuser';
import Perfume from './Perfume';

const New = () => {
    const products = [
        {
            id: 1,
            name: "향수",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_1.png",
            isNew: true,
        },
        {
            id: 1,
            name: "향수",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_2.png",
            isNew: true,
        },
        {
            id: 1,
            name: "디퓨저",
            brand: "브랜드",
            price: 40000,
            imagePath: "/img/diffuser_3.png",
            isNew: true,
        }, 
        {
            id: 1,
            name: "디퓨저",
            brand: "브랜드",
            price: 40000,
            imagePath: "/img/diffuser_4.png",
            isNew: true,
        }, 
        {
            id: 1,
            name: "디퓨저",
            brand: "브랜드",
            price: 40000,
            imagePath: "/img/diffuser_5.png",
            isNew: true,
        },
        
    ];
    const [selectedProduct, setSelectedProduct] = useState(null);
        const [currentPage, setCurrentPage] = useState(1);
        const [isModalOpen, setModalOpen] = useState(false);
    
        const itemsPerPage = 10;
    
        const totalPages = Math.ceil(products.length / itemsPerPage);
    
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentProducts = products.slice(startIndex, endIndex);
    
        const handleCardClick = (product) => {
            setSelectedProduct(product);
            setModalOpen(true);
        };
    
        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };
        
        const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
        };

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
