import styles from "./OrderStatus.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CgShapeTriangle } from "react-icons/cg";

const cx = classNames.bind(styles);

function OrderStatus() {
    const navigate = useNavigate();
    return (
        <div className={cx("container")}>
            <div className={cx("name-order")}>
                Đơn hàng <b>#123456</b>
            </div>
            <div className={cx("status-list")}>
                <div className={cx("status")}>Đã thanh toán</div>
                <div className={cx("status")}>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                </div>
                <div className={cx("status")}>Chuẩn bị hàng</div>
                <div className={cx("status")}>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                </div>
                <div className={cx("status")}>Đang vận chuyển</div>
                <div className={cx("status")}>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                </div>
                <div className={cx("status")}>Đã nhận hàng</div>
            </div>
            <div className={cx("status-point")}>
                <CgShapeTriangle />
            </div>
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
