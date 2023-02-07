import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import ItemInCart from "../../components/ItemInCart";
const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Giỏ hàng </div>
            <div className={cx("cart")}>
                <ItemInCart />
                <ItemInCart />
                <ItemInCart />
                <ItemInCart />
            </div>
            <button>Thanh toán</button>
        </div>
    );
}

export default Cart;
