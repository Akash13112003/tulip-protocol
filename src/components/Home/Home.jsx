import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import About from "../About/About";
import Section from "../Section/Section";

const Home = () => {
    const { products, setProducts } =
        useContext(Context);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };

    return (
        <div className="main">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Section />
                    <section><About /></section>
                </div>
            </div>
        </div>
    );
};

export default Home;
