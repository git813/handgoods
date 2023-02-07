import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import ItemCard from "../../components/ItemCard";
import CategoryCard from "../../components/CategoryCard";
import { Link, useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function Home() {
    const navigate = useNavigate();
    return (
        <div className={cx("container")}>
            <div className={cx("buy-request")}>
                <div className={cx("heading")}>Yêu cầu mua hộ</div>
                <input placeholder="Tên sản phẩm" />
                <input placeholder="Link sản phẩm" />
                <input placeholder="Mức giá mong muốn" />
                <button>Gửi yêu cầu</button>
                <div className={cx("text")}>
                    Xem tình trạng các yêu cầu đặt hàng của bạn
                    <div>
                        <u>
                            <Link to="/requirement">
                                <i> tại đây!</i>
                            </Link>
                        </u>
                    </div>
                </div>
            </div>
            <div className={cx("heading-part")}>Mặt hàng được ưa chuộng</div>
            <div className={cx("part")}>
                <div className={cx("item-list")}>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
                <button onClick={() => navigate("/best-seller")}>Xem thêm</button>
            </div>
            <div className={cx("heading-part")}>Phân loại phổ biến</div>
            <div className={cx("part")}>
                <div className={cx("item-list")}>
                    <CategoryCard name={"Điện thoại"} image={"phone.png"} />
                    <CategoryCard name={"Máy tính"} image={"laptop.png"} />
                    <CategoryCard name={"Máy ảnh"} image={"camera.png"} />
                    <CategoryCard name={"Đồ gia dụng"} image={"giadung.png"} />
                </div>
                <button onClick={() => navigate("/category")}>Xem thêm</button>
            </div>
        </div>
    );
}

export default Home;
