import { BrowserRouter, Route, Routes } from "react-router";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App() {

    return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<ProductList />} />
            <Route path={"/products/:id"} element={<ProductDetail />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;