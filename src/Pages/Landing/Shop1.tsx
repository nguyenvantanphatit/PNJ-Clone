import React from 'react';
import { Row, Col } from 'antd';
import './Shop1.css';
import Shop1_1 from '../../img/icon-circle-tragop.svg';
import Shop1_2 from '../../img/PNJfast-Giaotrong3h-circleicon.svg';
import Shop1_3 from '../../img/icon-circle-nbv.svg';


const Shop1: React.FC = () => {

    return (
        <>
            <div className='slide-shop1-h2'>
                <h2 className='slide-shop1-h2'>TẠI SAO NÊN CHỌN PNJ ?</h2>
            </div>
            <div className='slide-shop1-img'>
                <div className='slide-shop1-desc'>
                    <img src={Shop1_1} alt="" />
                    <p>TRẢ GÓP 0% LÃI SUẤT</p>
                    <p> Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng
                        giao hàng 4h</p>
                </div>
                <div className='slide-shop1-desc'>
                    <img src={Shop1_2} alt="" />
                    <p>GIAO HÀNG 3H</p>
                    <p> Sở hữu ngay món trang sức yêu thích chỉ trong vòng 3 giờ</p>
                </div>
                <div className='slide-shop1-desc'>
                    <img src={Shop1_3} alt="" />
                    <p> NGƯỜI BẠN VÀNG</p>
                    <p>  Giải pháp tài chính cầm đồ; thu mua kim cương, túi hiệu và đồng hồ cơ</p>
                </div>
            </div>
        </>
    );
};


export default Shop1;
