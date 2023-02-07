import styles from "./ItemInCart.module.scss";
import classNames from "classnames/bind";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import React, { useState } from "react";

const cx = classNames.bind(styles);

function ItemInCart() {
    const [amount, setAmount] = useState(1);
    const [check, setCheck] = useState(false);
    const changeAmount = (increase) => {
        let newAmount = amount + increase;
        if (newAmount < 2) setAmount(1);
        else setAmount(newAmount);
    };
    return (
        <div className={cx("item")}>
            <div className={cx("cb")}>
                <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                {check && <BsCheck onClick={() => setCheck(!check)} />}
            </div>
            <img src="./phone.png" />
            <div className={cx("name")}>Điện thoại Iphone 14 512GB, Gray chính hãng Apple</div>
            <div className={cx("amount")}>
                <div className={cx("change")}>
                    <AiFillMinusSquare onClick={() => changeAmount(-1)} />
                </div>
                <div className={cx("amount-value")}>
                    <div className={cx("border-top")}></div>
                    {amount}
                    <div className={cx("border-bottom")}></div>
                </div>
                <div className={cx("change")}>
                    <AiFillPlusSquare onClick={() => changeAmount(1)} />
                </div>
                <BsFillTrashFill />
            </div>
        </div>
    );
}

export default ItemInCart;
