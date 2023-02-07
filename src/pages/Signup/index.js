import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Signup(params) {
    const navigate = useNavigate();
    return (
        <div className={cx("login")}>
            <div className={cx("heading")}>Đăng ký</div>
            <div className={cx("text")}>Chỉ mất vài giây, mua hàng liền tay!</div>
            <input placeholder="Tên đăng nhập" />
            <input placeholder="Mật khẩu" />
            <input placeholder="Nhập lại mật khẩu" />
            <button>Đăng ký</button>
            <div className={cx("option")}>
                <div>
                    Đã có tài khoản? &nbsp;
                    <u>
                        <i onClick={() => navigate("/login")}> Đăng nhập ngay!</i>
                    </u>
                </div>
                <div>
                    <u>
                        <i>Quên mật khẩu</i>
                    </u>
                </div>
            </div>
            <img src="./footerlogin.png" />
        </div>
    );
}

export default Signup;
