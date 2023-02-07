import Home from "../pages/Home";
import Category from "../pages/Category";
import BestSeller from "../pages/BestSeller";
import ProductList from "../pages/ProductList";
import ProductInfo from "../pages/ProductInfo";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import RequirementStatus from "../pages/RequirementStatus";
import OrderStatus from "../pages/OrderStatus";
import DefaultLayout from "../components/DefaultLayout";

const routes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/category", component: Category, layout: DefaultLayout },
    { path: "/best-seller", component: BestSeller, layout: DefaultLayout },
    { path: "/product-list", component: ProductList, layout: DefaultLayout },
    { path: "/product-info", component: ProductInfo, layout: DefaultLayout },
    { path: "/requirement", component: RequirementStatus, layout: DefaultLayout },
    { path: "/order-status", component: OrderStatus, layout: DefaultLayout },
    { path: "/cart", component: Cart, layout: DefaultLayout },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
];

export default routes;
