import React from 'react';
import { Row, Col } from 'antd';
import './Shop.css';
import Shop_1 from '../../img/cuahangbanner.jpg';


const Shop: React.FC = () => {

    return (
        <>
            <Row className='slide-shop-row'>
                <Col>
                    <p>Xem địa chỉ hệ thống hơn 340 Cửa Hàng PNJ
                        trên toàn quốc</p>
                    <img src={Shop_1} alt="" />
                </Col>
            </Row>
        </>
    );
};


export default Shop;
