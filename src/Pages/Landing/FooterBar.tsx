import { Row, Col } from "antd";
import './FooterBar.css';
import footer_1 from '../../img/pnj.com.vn.png';
import footer_2 from '../../img/fb.svg';
import footer_3 from '../../img/instagram.svg';
import footer_4 from '../../img/youtube.svg';
import footer_5 from '../../img/email.svg';
import footer_6 from '../../img/zalo.png';
import footer_7 from '../../img/visa.svg';
import footer_8 from '../../img/mastercard.svg';
import footer_9 from '../../img/jcb.svg';
import footer_10 from '../../img/thanhtoantienmat.svg';
import footer_11 from '../../img/internetBanking.svg';
import footer_12 from '../../img/tragop.svg';
import footer_13 from '../../img/op-da-thong-bao-bo-cong-thuong-183x60.png';

const FooterBar: React.FC = () => {
    return (
        <>
            <Row>
                <Col>
                    <img src={footer_1} alt="" className="img-pnj" />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <h4>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</h4>
                    <p>170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh</p>
                    <p> ĐT: 028 39951703 - Fax: 028 3995 1702</p>
                    <p> Giấy chứng nhận đăng ký doanh nghiệp: 0300521758.</p>
                    <p> Tổng đài hỗ trợ (08:00-21:00, miễn phí gọi)</p>
                    <p> Gọi mua: 1800545457 (phím 1)</p>
                    <p> Khiếu nại: 1800545457 (phím 2)</p>
                </Col>
                <Col span={6}>
                    <h4>  VỀ PNJ</h4>
                    <p>Câu chuyện PNJ</p>
                    <p> Tuyển dụng</p>
                    <p> Xuất khẩu</p>
                    <p>Kinh doanh sỉ</p>
                    <p> Kiểm định kim cương</p>
                    <p>Kinh doanh vàng miếng</p>
                </Col>
                <Col span={6}>
                    <h4>  DỊCH VỤ KHÁCH HÀNG</h4>
                    <p> Hướng dẫn đo size trang sức</p>
                    <p>  Mua hàng trả góp</p>
                    <p> Hướng dẫn mua hàng và thanh toán</p>
                    <p> Chính sách hoàn tiền</p>
                    <p> Chính sách giao hàng</p>
                    <p> Cẩm nang sử dụng trang sức</p>
                    <p>  Chính sách bảo hành thu đổi</p>
                    <p>Chính sách khách hàng thân thiết</p>
                    <p> Chính sách bảo mật thông tin khách hàng</p>
                    <p>  Câu hỏi thường gặp</p>
                </Col>
                <Col span={6}>
                    <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
                    <img src={footer_2} alt="" className="img-connec" />
                    <img src={footer_3} alt="" className="img-connec" />
                    <img src={footer_4} alt="" className="img-connec" />
                    <img src={footer_5} alt="" className="img-connec" />
                    <h4>QUAN TÂM ZALO OA PNJ</h4>
                    <p>Nhận các thông tin khuyến mãi hấp dẫn</p>
                    <img src={footer_6} alt="" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                </Col>
                <Col span={6}>
                    <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                    <img src={footer_7} alt="" className="img-payment" />
                    <img src={footer_8} alt="" className="img-payment" />
                    <img src={footer_9} alt="" className="img-payment" />
                    <img src={footer_10} alt="" className="img-payment" />
                    <img src={footer_11} alt="" className="img-payment" />
                    <img src={footer_12} alt="" className="img-payment" />
                </Col>
                <Col span={6}>
                    <h4>CHỨNG NHẬN</h4>
                    <img src={footer_13} alt="" className="img-chungnhan" />
                </Col>
            </Row>
        </>
    );
}

export default FooterBar;
