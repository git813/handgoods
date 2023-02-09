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
            <div className={cx("heading-part")}>Thông tin sản phẩm</div>
            <div className={cx("describe")}>
                <b>
                    Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào
                    ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ
                    ngoài đẹp mắt sang trọng. Từ ngày 14/10/2022 người dùng đã có thể mua sắm các sản phẩm iPhone 14
                    series với đầy đủ phiên bản tại Thế Giới Di Động.
                </b>
                <b>Thiết kế cao cấp và vẻ ngoài sành điệu</b>
                Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend tương tự thế hệ iPhone
                13 series, đây được xem là kiểu thiết kế rất thành công trên các thế hệ trước khi tạo nên cơn sốt toàn
                cầu về kiểu dáng điện thoại cho đến nay. Thiết kế vuông vức - iPhone 14 Pro Max 128GB Mặt lưng làm từ
                kính cùng khung thép không gỉ giúp cho iPhone có thêm độ bền bỉ để đồng hành cùng bạn được lâu dài hơn,
                không những thế nó còn làm cho thiết bị của bạn trở nên sang trọng và đẳng cấp hơn.
                <img src="../ip-1.jpg" />
                Mặt lưng làm từ kính cùng khung thép không gỉ giúp cho iPhone có thêm độ bền bỉ để đồng hành cùng bạn
                được lâu dài hơn, không những thế nó còn làm cho thiết bị của bạn trở nên sang trọng và đẳng cấp hơn.
                <b>Đột phá với thiết kế Dynamic island</b>
                Để tối ưu được không gian hiển thị thì Apple cũng đã chính thức loại bỏ tai thỏ huyền thoại để thay thế
                vào đó là kiểu bố trí hình viên thuốc độc đáo, vừa đem lại vùng hiển thị rộng rãi hơn mà đây còn là một
                đặc điểm nhận diện dễ dàng trên chiếc iPhone 14 Pro Max.
                <img src="../ip-2.jpg" />
                Đây được xem là một điểm mới về phần màn hình trên dòng sản phẩm Pro Max năm nay vì cụm tai thỏ đã được
                lược bỏ và thay thế vào đó là thiết kế hình notch viên thuốc, đi kèm với đó sẽ là tính năng Dynamic
                Island để biến cụm này trở nên thú vị hơn qua những thông báo hay thông tin trạng thái.
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
