import styles from "./ItemCard.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function ItemCard() {
    const navigate = useNavigate();
    return (
        <div className={cx("item-card")} onClick={() => navigate("/product-info")}>
            <img src="./phone.png" className={cx("product-image")} />
            <div className={cx("name")}>Điện thoại Iphone 14 512GB, Gray chính hãng Apple</div>
            <div className={cx("origin-price")}>30.000.000đ</div>
            <div className={cx("sale-price")}>20.000.000đ</div>
            <img src="./korea.png" className={cx("country-image")} />
        </div>
    );
}
export default ItemCard;
