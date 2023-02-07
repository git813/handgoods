import styles from "./BestSeller.module.scss";
import classNames from "classnames/bind";
import ItemCard from "../../components/ItemCard";
import Pagination from "../../components/Pagination";
const cx = classNames.bind(styles);

function BestSeller() {
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Mặt hàng được ưa chuộng</div>
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

export default BestSeller;
