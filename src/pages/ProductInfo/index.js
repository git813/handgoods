import styles from "./ProductInfo.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
const cx = classNames.bind(styles);

function ProductInfo() {
    const [amount, setAmount] = useState(1);
    const [image, setImage] = useState("./phone.png");

    const navigate = useNavigate();

    const changeAmount = (increase) => {
        let newAmount = amount + increase;
        if (newAmount < 2) setAmount(1);
        else setAmount(newAmount);
    };

    const changeImage = (link) => {
        console.log(link);
        setImage(link);
    };
    return (
        <div className={cx("container")}>
            <div className={cx("info")}>
                <div className={cx("image")}>
                    <img src={image} />
                    <div className={cx("sub-image")}>
                        <div>
                            <img src="./phone.png" onClick={(e) => changeImage(e.target.src)} />
                            <img src="./laptop.png" onClick={(e) => changeImage(e.target.src)} />
                            <img src="./camera.png" onClick={(e) => changeImage(e.target.src)} />
                            <img src="./giadung.png" onClick={(e) => changeImage(e.target.src)} />
                        </div>
                    </div>
                </div>
                <div className={cx("text")}>
                    <div className={cx("name")}>Điện thoại Iphone 14 512GB, Gray chính hãng Apple</div>
                    <div className={cx("country")}>
                        <img src="./korea.png" />
                        <div className={cx("country-name")}>Hàn Quốc</div>
                    </div>
                    <div className={cx("origin-price")}>30.000.000đ</div>
                    <div className={cx("sale-price")}>20.000.000đ</div>
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
                    </div>
                    <button>Thêm vào giỏ</button>
                    <i className={cx("ship-info")}>
                        Thời gian giao hàng dự kiến {" (Tới "} &nbsp;
                        <b>Thủ Đức, TPHCM</b>
                        {") : "}
                        <div className={cx("ship-time")}>&nbsp; 7-10 ngày</div>
                    </i>
                </div>
            </div>
            <div className={cx("heading-part")}>Phân loại phổ biến</div>
            <div className={cx("describe")}>
                Quê nội của em đẹp bởi có con sông chảy qua làng. Quanh năm cần mẫn, dòng sông chở nặng phù sa bồi đắp
                cho ruộng lúa. Buổi sớm tinh mơ, dòng nước mờ mờ phẳng lặng chảy. Giữa trưa, mặt sông nhấp nhô ánh bạc
                lẫn màu xanh nước biếc. Chiều tà, dòng nước trở thành màu khói trong, hơi tối âm âm. Hai bên bờ sông,
                luỹ tre làng nối vai nhau che rợp bóng mát cho đôi bờ. Sông đẹp nhất vào những đêm trăng. Bóng trăng
                lồng vào nước, luỹ tre làng in bóng trên dòng sông, vài chiếc thuyền neo trên bờ cát. Cảnh vật hữu tình
                đẹp như tranh vẽ.
            </div>
            <div className={cx("heading-part")}>Sản phẩm tương tự</div>
            <div className={cx("part")}>
                <div className={cx("item-list")}>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
                <button onClick={() => navigate("/best-seller")}>Xem thêm</button>
            </div>
        </div>
    );
}

export default ProductInfo;
