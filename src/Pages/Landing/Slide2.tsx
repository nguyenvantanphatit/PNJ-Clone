import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './Slide2.css';
import Slide2_1 from '../../img/trang-suc-vang.png';
import Slide2_2 from '../../img/trang-suc-bac.png';
import Slide2_3 from '../../img/nhan-cuoi.png';
import Slide2_4 from '../../img/day-chuyen-vang.png';
import Slide2_5 from '../../img/nhan-kim-cuong.png';
import Slide2_6 from '../../img/bong-tai-vang.png';
import Slide2_7 from '../../img/bong-tai-kim-cuong.png';
import Slide2_8 from '../../img/lac-vong-tay.png';
import Slide2_9 from '../../img/nhan-ecz.png';
import Slide2_10 from '../../img/nhan-vang.png';
import Slide2_11 from '../../img/dong-ho.png';
import Slide2_12 from '../../img/vong-lac-tay-bac.png';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Slide2: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Slide2_1,
        Slide2_2,
        Slide2_3,
        Slide2_4,
        Slide2_5,
        Slide2_6,
        Slide2_7,
        Slide2_8,
        Slide2_9,
        Slide2_10,
        Slide2_11,
        Slide2_12
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
            <h3>Xu hướng tìm kiếm</h3>
            <Row className='slide-2-row'>
                <button onClick={prevSlide} className='next'><LeftOutlined /></button>
                <Col>
                    {displayedImages.slice(0, 6).map((image, index) => (
                        <img key={index} src={image} alt="" className='slide-2-img' />
                    ))}
                </Col>
                <button onClick={nextSlide} className='next'><RightOutlined /></button>
            </Row>
        </>
    );
};


export default Slide2;
