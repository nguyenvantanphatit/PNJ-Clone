import { Row, Col, Input } from "antd";
import './NavBar.css';
import { SearchOutlined } from '@ant-design/icons';
const NavBar: React.FC = () => {
    return (
        <>
            <Row className="navbar">
                <Col className="navbar-1">
                    <p className="navbar-text">Trang Sức</p>
                    <p className="navbar-p">Trang Sức Cưới</p>
                    <p className="navbar-p">Đồng Hồ</p>
                    <p className="navbar-p">Quà Tặng</p>
                    <p className="navbar-p">Thương Hiệu</p>
                    <p className="navbar-p">Blog</p>
                    <p className="navbar-p">Khuyến Mãi</p>
                </Col>
                <Col className="navbar-2">
                    <Input
                        placeholder="Tìm kiếm nhanh"
                        suffix={<SearchOutlined />}
                        className="navbar-search"
                    />
                </Col>
            </Row>
        </>
    );
}

export default NavBar;
