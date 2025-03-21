import React from "react";
import MainLayout from "../layouts/MainLayout";
import { path } from "../constants/path";
import Home from "../pages/Home/Home";
import CocoonValues from "../pages/Cocoon/CocoonValues";
import { useRoutes } from "react-router-dom";
import CocoonStory from "../pages/Cocoon/CocoonStory";
import CocoonResponsibility from "../pages/Cocoon/CocoonResponsibility";
import Article from "../components/Article/Article";
import Article2 from "../components/ArticleExtra/Article2";
import Article3 from "../components/ArticleExtra/Article3";
import { CartProvider } from "../context/cart";
import ContactPage from "../pages/Contact/ContactPage"; // Import ContactPage

export default function useRouteElements() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <CartProvider>
          <MainLayout />
        </CartProvider>
      ),

      children: [
        {
          path: path.cocoon,
          element: <Home />,
        },
        {
          path: path.home,
          element: <Home />,
        },
        {
          path: path.coreValue,
          element: <CocoonValues />,
        },
        {
          path: path.storyBrand,
          element: <CocoonStory />,
        },
        {
          path: path.communityResponsibility,
          element: <CocoonResponsibility />,
        },
        {
          path: path.article,
          element: <Article />,
        },
        {
          path: path.beauty,
          element: <Article2 />,
        },
        {
          path: path.charity,
          element: <Article3 />,
        },
        { // Thêm route cho ContactPage
          path: "/contact",
          element: <ContactPage />,
      },
      ],
    },
  ]);
  return element;
}
