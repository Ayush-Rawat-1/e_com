import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Carousels from "../components/Carousels";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

function Home(){
    return (
        <div>
            <Header />
            <Carousels />
            {/* <Products /> */}
            <ProductList />
            <Footer />
        </div>
    );
}

export default Home;