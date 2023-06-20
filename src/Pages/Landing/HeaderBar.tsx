import { Row, Col } from "antd";
import './HeaderBar.css';
import header_1 from '../../img/icon-relationship-new.svg';
import header_2 from '../../img/icon-stores-new.svg';
import header_3 from '../../img/icon-hotline-new.svg';
import header_4 from '../../img/pnj.com.vn.png';
import header_5 from '../../img/icon-cart-new.svg';
import { ClockCircleOutlined } from '@ant-design/icons';
const HeaderBar: React.FC = () => {
    return (
        <>
            <Row className="header">
                <Col className="header-1">
                    <img src={header_1} alt="Quan Hệ Cổ Đông (IR)" className="header-img" />
                    <p className="header-text">Quan Hệ Cổ Đông (IR)</p>
                    <img src={header_2} alt="Cửa Hàng" className="header-img" />
                    <p className="header-text">Cửa Hàng</p>
                    <img src={header_3} alt="  1800 54 54 57" className="header-img" />
                    <p className="header-text">1800 54 54 57</p>
                </Col>
                <Col className="header-2">
                    <img src={header_4} alt="PNJ" className="header-img-pnj" />
                </Col>
                <Col className="header-3">
                    <ClockCircleOutlined className="oclock" />
                    <p className="header-text">Lịch Sử Đơn Hàng</p>
                    <img src={header_5} alt="Giỏ Hàng" className="header-img" />
                    <p className="header-text">Giỏ Hàng</p>
                </Col>
            </Row>
        </>
    );
}

export default HeaderBar;
