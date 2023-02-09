import styles from "./Payment.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CgShapeTriangle } from "react-icons/cg";

const cx = classNames.bind(styles);

function Payment() {
    const navigate = useNavigate();
    const changeMethod = (type) => {
        const visa = document.getElementById("visa");
        const mastercard = document.getElementById("mastercard");
        const paypal = document.getElementById("paypal");
        const bitcoin = document.getElementById("bitcoin");

        visa.className = "";
        mastercard.className = "";
        paypal.className = "";
        bitcoin.className = "";

        const pickedType = document.getElementById(type);
        pickedType.className = cx("picked");
    };
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Sản phẩm đã chọn </div>
            <div className={cx("list-item")}>
                <div className={cx("item")}>
                    <img src="../phone.png" />
                    <div className={cx("name")}>Điện thoại Iphone 14 512GB, Gray chính hãng Apple</div>
                    <div className={cx("amount")}>SL: 02</div>
                </div>
                <div className={cx("item")}>
                    <img src="../phone.png" />
                    <div className={cx("name")}>Điện thoại Iphone 14 512GB, Gray chính hãng Apple</div>
                    <div className={cx("amount")}>SL: 02</div>
                </div>
            </div>
            <div className={cx("payment-status")}>
                Thành tiền: &nbsp;
                <div className={cx("price")}> 40.000.000đ</div>
            </div>
            <div className={cx("heading")}>Phương thức thanh toán </div>
            <div className={cx("payment-method")}>
                <img src="../Visa.png" id="visa" onClick={() => changeMethod("visa")} className={cx("picked")} />
                <img src="../Mastercard.png" id="mastercard" onClick={() => changeMethod("mastercard")} />
                <img src="../Paypal.png" id="paypal" onClick={() => changeMethod("paypal")} />
                <img src="../Bitcoin.png" id="bitcoin" onClick={() => changeMethod("bitcoin")} />
            </div>
            <div className={cx("heading")}>Địa chỉ nhận hàng </div>
            <textarea spellCheck="false">123/321 đường 456, huyện 789, Thành phố Hồ Chí Minh</textarea>
            <button>Thanh toán</button>
        </div>
    );
}

export default Payment;
