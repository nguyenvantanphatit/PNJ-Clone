import React from 'react';
import { Row, Col, Button } from 'antd';
import './News.css';
import News_1 from '../../img/gia-vang-hom-nay-new.jpg';
import News_2 from '../../img/top-5-nhan-cuoi-pnj-duoc-ua-chuong-nhat-thang-6-2023.jpg';
import News_3 from '../../img/top-5-trang-suc-ngoc-trai-pnj-duoc-ua-chuong-nhat-thang-6-2023.jpg';
import { RightOutlined } from '@ant-design/icons';

const News: React.FC = () => {
    return (
        <>
            <h3 className='new-h3'>Tin Tức</h3>
            <Row className='new' gutter={60}>
                <Col span={10}>
                    <img src={News_1} alt='' />
                </Col>
                <Col span={6}>
                    <img src={News_2} alt='' />
                    <h4>Top 5 nhẫn cưới PNJ được ưa chuộng nhất tháng 6/2023</h4>
                    <p>
                        Với mong muốn giúp đôi uyên ương lựa chọn kỷ vật tình yêu trong ngày trọng đại, PNJ xin gợi ý đến đôi bạn những cặp nhẫn cưới đẹp nhất tháng 6/2023.
                    </p>
                    <p>
                        Xem thêm <RightOutlined />
                    </p>
                </Col>
                <Col span={6}>
                    <img src={News_3} alt='' />
                    <h4>Top 5 trang sức ngọc trai PNJ được ưa chuộng nhất tháng 6/2023</h4>
                    <p>
                        Trang sức ngọc trai luôn ẩn chứa sức hút mãnh liệt với phái đẹp. Hãy cùng khám phá top 5 trang sức ngọc trai PNJ được ưa chuộng nhất trong tháng 6/2023 này nàng nhé!
                    </p>
                    <p>
                        Xem thêm <RightOutlined />
                    </p>
                </Col>
            </Row>
            <div className='news-button'>
                <Button>Xem tất cả</Button>
            </div>
        </>
    );
};

export default News;
