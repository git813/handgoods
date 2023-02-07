import styles from "./OrderStatus.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function OrderStatus() {
    const navigate = useNavigate();
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Chi tiết đơn hàng </div>
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
                Đã thanh toán: &nbsp;
                <div className={cx("price")}> 40.000.000đ</div>
            </div>
        </div>
    );
}

export default OrderStatus;
