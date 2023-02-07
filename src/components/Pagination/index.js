import styles from "./Pagination.module.scss";
import classNames from "classnames/bind";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const cx = classNames.bind(styles);
function Pagination() {
    return (
        <div className={cx("pagination")}>
            <div className={cx("fisrt-page")}>
                <IoIosArrowBack />
                <IoIosArrowBack />
                Trang đầu
            </div>
            <div className={cx("page")}>1</div>
            <div className={cx("page")}>2</div>
            <div className={cx("page")}>3</div>
            <div className={cx("skip-page")}>...</div>
            <div className={cx("page")}>10</div>
            <div className={cx("page")}>11</div>
            <div className={cx("last-page")}>
                Trang cuối
                <IoIosArrowForward />
                <IoIosArrowForward />
            </div>
        </div>
    );
}

export default Pagination;
