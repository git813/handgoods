import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import routes from "./routes";
import ScrollToTop from "./pages/ScrollToTop";
function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout || null;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    Layout ? (
                                        <Fragment>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <Page />
                                        </Fragment>
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
