import styles from "./Category.module.scss";
import classNames from "classnames/bind";
import ItemCard from "../../components/ItemCard";
import CategoryCard from "../../components/CategoryCard";
import Pagination from "../../components/Pagination";
const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Phân loại phổ biến</div>
            <div className={cx("item-list")}>
                <CategoryCard name={"Điện thoại"} image={"phone.png"} />
                <CategoryCard name={"Máy tính"} image={"laptop.png"} />
                <CategoryCard name={"Máy ảnh"} image={"camera.png"} />
                <CategoryCard name={"Đồ gia dụng"} image={"giadung.png"} />
                <CategoryCard name={"Điện thoại"} image={"phone.png"} />
                <CategoryCard name={"Máy tính"} image={"laptop.png"} />
                <CategoryCard name={"Máy ảnh"} image={"camera.png"} />
                <CategoryCard name={"Đồ gia dụng"} image={"giadung.png"} />
                <CategoryCard name={"Điện thoại"} image={"phone.png"} />
                <CategoryCard name={"Máy tính"} image={"laptop.png"} />
                <CategoryCard name={"Máy ảnh"} image={"camera.png"} />
                <CategoryCard name={"Đồ gia dụng"} image={"giadung.png"} />
            </div>
            <Pagination />
        </div>
    );
}

export default Category;
