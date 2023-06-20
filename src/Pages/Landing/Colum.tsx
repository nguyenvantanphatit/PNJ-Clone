import React from 'react';
import { Row, Col } from 'antd';
import './Colum.css';
import Colum_1 from '../../img/bst-unisex-494x247CTA.jpg'
import Colum_2 from '../../img/mickey_-___494_x_247.png'
import Colum_3 from '../../img/uu-dai-doc-quyen-online_494_x_247_CTA.jpg'

const Colum: React.FC = () => {
    return (
        <Row className="colum-row">
            <Col span={8} className="colum-col">
                <img src={Colum_1} alt="" />
            </Col>
            <Col span={8} className="colum-col">
                <img src={Colum_2} alt="" />
            </Col>
            <Col span={8} className="colum-col">
                <img src={Colum_3} alt="" />
            </Col>
        </Row>
    );
}

export default Colum;
