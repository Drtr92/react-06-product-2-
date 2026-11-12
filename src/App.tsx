import { BrowserRouter, Route, Routes } from "react-router";
import ProductList from "./pages/ProductList.js";
import ProductDetail from "./pages/ProductDetail.js";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<ProductList />} />
                    <Route path={"/products/:id"} element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
