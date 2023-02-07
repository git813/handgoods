import styles from "./CategoryCard.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function CategoryCard({ name, image }) {
    const navigate = useNavigate();
    return (
        <div className={cx("category-card")} onClick={() => navigate("/product-list")}>
            <img src={`./${image}`} />
            <div className={cx("name")}>{name}</div>
        </div>
    );
}
export default CategoryCard;
