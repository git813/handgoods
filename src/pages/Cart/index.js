import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import ItemInCart from "../../components/ItemInCart";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function Cart() {
    const navigate = useNavigate();
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Giỏ hàng </div>
            <div className={cx("cart")}>
                <ItemInCart />
                <ItemInCart />
                <ItemInCart />
                <ItemInCart />
            </div>
            <button onClick={() => navigate("/payment")}>Thanh toán</button>
        </div>
    );
}

export default Cart;
