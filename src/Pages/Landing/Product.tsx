import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './Product.css';
import Product_1 from '../../img/gd0000y000283-day-chuyen-vang-18k-pnj-day-dan-kieu-chu-cong.png';
import Product_2 from '../../img/gbrbxmy000060-bong-tai-vang-14k-dinh-da-ruby-pnj.png';
import Product_3 from '../../img/sp-gbdd00w000375-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png';
import Product_4 from '../../img/gnddddw003706-nhan-kim-cuong-vang-trang-14k-pnj-true-love-19-1.png';
import Product_5 from '../../img/gmxmxmw001562-mat-day-chuyen-vang-trang-10k-dinh-da-ecz-pnj-001.png';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Product: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Product_1,
        Product_2,
        Product_3,
        Product_4,
        Product_5,

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const displayedImages = images.slice(currentIndex).concat(images.slice(0, currentIndex));

    return (
        <>
            <h3>Sản phẩm bán chạy</h3>
            <Row className='slide-product-row'>
                <button onClick={prevSlide} className='next'><LeftOutlined /></button>
                <Col>
                    {displayedImages.slice(0, 4).map((image, index) => (
                        <img key={index} src={image} alt="" className='slide-product-img' />
                    ))}
                </Col>
                <button onClick={nextSlide} className='next'><RightOutlined /></button>
            </Row>
        </>
    );
};


export default Product;
