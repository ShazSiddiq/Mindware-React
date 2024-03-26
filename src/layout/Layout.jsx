import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from './../components/footer/Footer';
import Navbar from './../components/header/Navbar';
import NavbarTop from "../components/header/headerComponents/NavbarTop";
// import SearchSection from "../components/searchBarSection/SearchSection";

const AppLayout = () => {
    return (
        <div className="">
            <NavbarTop/>
            <Navbar />
          
            <Outlet />
            <ScrollRestoration />
           
            <Footer />
        </div>

    );
};

export default AppLayout;
