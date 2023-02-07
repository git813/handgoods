import styles from "./RequirementStatus.module.scss";
import classNames from "classnames/bind";
import Requirement from "../../components/Requirement";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function RequirementStatus() {
    const navigate = useNavigate();
    return (
        <div className={cx("container")}>
            <div className={cx("heading")}>Yêu cầu của bạn </div>
            <div className={cx("cart")}>
                <Requirement status={"pending"} text={"Đang xét duyệt..."} />
                <Requirement status={"reject"} text={"Đã từ chối!"} />
                <Requirement status={"approve"} text={"Đã thêm vào giỏ hàng!"} />
            </div>
            <button onClick={() => navigate("/cart")}>Xem giỏ hàng</button>
        </div>
    );
}

export default RequirementStatus;
