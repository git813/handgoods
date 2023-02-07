import styles from "./Requirement.module.scss";
import classNames from "classnames/bind";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import React, { useState } from "react";

const cx = classNames.bind(styles);

function Requirement({ status, text }) {
    return (
        <div className={cx("item")}>
            <img src="./phone.png" />
            <div className={cx("name")}>Điện thoại Iphone 14 512GB, Gray chính hãng Apple</div>
            <div className={cx("status", `${status}`)}>{text}</div>
        </div>
    );
}

export default Requirement;
