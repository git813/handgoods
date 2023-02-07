import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import { IoHome, IoCart, IoSearchSharp, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const navigate = useNavigate();

    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <div className={cx("header-left")}>
                    <IoHome onClick={() => navigate("/")} />
                    <img className={cx("logo")} src="../logo-header.png" />
                </div>
                <div className={cx("header-right")}>
                    <div className={cx("search")}>
                        <input placeholder="Bạn muốn tìm thứ gì? Viết ngay vào đây!" />
                        <IoSearchSharp className={cx("search-icon")} />
                    </div>
                    <IoCart onClick={() => navigate("/cart")} />
                    <img className={cx("avatar")} src="../avatar-default.jpg" onClick={() => navigate("/login")} />
                </div>
            </div>
            <div className={cx("container")}>{children}</div>
            <div className={cx("footer")}>
                <img className={cx("logo")} src="../logo.png" />
                <div className={cx("policy")}>
                    <b> CHÍNH SÁCH</b>
                    <div>Chính sách giao nhận </div>
                    <div>Chính sách bảo hành </div>
                    <div>Phương thức thanh toán</div>
                </div>
                <div className={cx("contact")}>
                    <b>Bạn cần tư vấn ?</b> <br />
                    Liên hệ chúng tôi ngay! <br />
                    <IoLogoFacebook />
                    <IoLogoInstagram />
                    <IoLogoTwitter />
                    <FaTelegramPlane />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
