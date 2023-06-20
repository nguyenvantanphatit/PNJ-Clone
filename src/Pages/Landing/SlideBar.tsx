import React from 'react';
import { Carousel } from 'antd';
import SlideBar_1 from '../../img/BANNER_GOLD_1972x640-cta.jpg';
import SlideBar_2 from '../../img/PNJ_Fast_x_Ahamove-20230308T114624Z-001_1972x640LDP_CTA.jpg';
import SlideBar_3 from '../../img/banner-main-homepage-desktop-uu-dai-doc-quyen-thang-gia-dinh-1972x640_cta100.jpg';
import SlideBar_4 from '../../img/egift-2023-1972x640CTA.jpg';
import SlideBar_5 from '../../img/online-t6-1972x640CTA.jpg';
import './SlideBar.css';

const SlideBar: React.FC = () => (
    <Carousel autoplay dotPosition="bottom" dots={{ className: 'custom-dots' }}>
        <div>
            <img src={SlideBar_1} alt="Image 1" className="slidebar-img" />
        </div>
        <div>
            <img src={SlideBar_2} alt="Image 2" className="slidebar-img" />
        </div>
        <div>
            <img src={SlideBar_3} alt="Image 3" className="slidebar-img" />
        </div>
        <div>
            <img src={SlideBar_4} alt="Image 4" className="slidebar-img" />
        </div>
        <div>
            <img src={SlideBar_5} alt="Image 5" className="slidebar-img" />
        </div>
    </Carousel>
);

export default SlideBar;
