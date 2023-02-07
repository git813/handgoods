import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Login(params) {
    const navigate = useNavigate();
    return (
        <div className={cx("login")}>
            <div className={cx("heading")}>Đăng nhập</div>
            <div className={cx("text")}>Bạn đã có tài khoản? Đăng nhập ngay!</div>
            <input placeholder="Tên đăng nhập" />
            <input placeholder="Mật khẩu" />
            <button>Đăng nhập</button>
            <div className={cx("option")}>
                <div>
                    Bạn chưa có tài khoản? &nbsp;
                    <u>
                        <i onClick={() => navigate("/signup")}>Đăng ký!</i>
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

export default Login;
