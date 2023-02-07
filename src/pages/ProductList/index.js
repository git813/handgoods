import styles from "./ProductList.module.scss";
import classNames from "classnames/bind";
import ItemCard from "../../components/ItemCard";
import Pagination from "../../components/Pagination";
const cx = classNames.bind(styles);

function ProductList() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Điện thoại</div>
            <div className={cx("item-list")}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            <Pagination />
        </div>
    );
}

export default ProductList;
