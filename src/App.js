import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";


function App() {
    return (
        <>
            <BrowserRouter>
                    <Header />
                <Routes>
                    <Route path="/" exact element={<ProductListing/>} />
                    <Route path="/product-details/:id" element={<ProductDetails />} />
                    <Route>404 Not Found!</Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
