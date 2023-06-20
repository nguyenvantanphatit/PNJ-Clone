import React, { useState } from 'react';
import { Row, Col } from 'antd';
import './Slide3.css';
import Slide3_1 from '../../img/style-t5-1200x1200.png';
import Slide3_2 from '../../img/block-brands-disney.png';
import Slide3_3 from '../../img/block-brands-watch.png';
import Slide3_4 from '../../img/KV_PNJxHK_1200x1200_banner_homepage_no_logo_no_text.jpg';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Slide3: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Slide3_1,
        Slide3_2,
        Slide3_3,
        Slide3_4,

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
            <h3>Thương hiệu nổi bật</h3>
            <Row className='slide-2-row'>
                <button onClick={prevSlide} className='next'><LeftOutlined /></button>
                <Col>
                    {displayedImages.slice(0, 3).map((image, index) => (
                        <img key={index} src={image} alt="" className='slide-3-img' />
                    ))}
                </Col>
                <button onClick={nextSlide} className='next'><RightOutlined /></button>
            </Row>
        </>
    );
};


export default Slide3;
