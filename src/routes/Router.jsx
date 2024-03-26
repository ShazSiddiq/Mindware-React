import React, { lazy } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AppLayout from "../layout/Layout";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Career from "../pages/Career";
import About from "../pages/About";


// ================ 👇 importing component with LAZY 👇  =====================

const HomePage = lazy(() => import("../pages/HomePage"));

// ================ 👆 importing component with LAZY 👆 =====================

const Router = ({ children }) => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<AppLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path={"blogs"} element={<Blogs />} />
            <Route path={"contact"} element={<ContactUs />} />
            <Route path={"career"} element={<Career />} />
            <Route path={"about"} element={<About />} />
         </Route>
      )
   );

   return <RouterProvider router={router}>Router</RouterProvider>;
};

export default Router;
