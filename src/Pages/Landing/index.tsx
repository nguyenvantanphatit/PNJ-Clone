import { Layout, Row, Col } from 'antd';
import HeaderBar from '../Landing/HeaderBar'
import NavBar from '../Landing/NavBar'
import SlideBar from '../Landing/SlideBar'
import Colum from '../Landing/Colum'
import Slide2 from '../Landing/Slide2'
import Slide3 from '../Landing/Slide3'
import Product from '../Landing/Product';
import Shop from '../Landing/Shop';
import Shop1 from '../Landing/Shop1';
import News from '../Landing/News';
import FooterBar from '../Landing/FooterBar';
import './index.css'
const Landing = () => {
    return (
        <Layout>
            <Row>
                <Col className='pnj-header'>
                    <HeaderBar />
                    <NavBar />
                </Col>
            </Row>
            <Row>
                <Col className='pnj-slidebar'>
                    <SlideBar />
                </Col>
            </Row>
            <Row>
                <Col className='room-type'>
                    <Colum />
                </Col>
            </Row>

            <Row>
                <Col className='pnj-slide2'>
                    <Slide2 />
                </Col>
            </Row>
            <Row>
                <Col className='pnj-slide3'>
                    <Slide3 />
                </Col>
            </Row>
            <Row>
                <Col className='pnj-product'>
                    <Product />
                </Col>
            </Row>
            <Row >
                <Col className='galley'>
                </Col>
            </Row>
            <Row>
                <Col >
                </Col>
            </Row>
            <Row>
                <Col className='pnj-shop'>
                    <Shop />
                </Col>
            </Row>
            <Row>
                <Col className='pnj-shop1' span={24}>
                    <Shop1 />
                </Col>
            </Row>
            <Row>
                <Col className='pnj-new'>
                    <News />
                </Col>
            </Row>
            <Row>
                <Col className="pnj-footer" span={24}>
                    <FooterBar />
                </Col>
            </Row>

        </Layout>
    );
};

export default Landing;
