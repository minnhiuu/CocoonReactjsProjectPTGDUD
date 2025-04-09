import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import CocoonValues from "../pages/Cocoon/CocoonValues";
import CocoonStory from "../pages/Cocoon/CocoonStory";
import CocoonResponsibility from "../pages/Cocoon/CocoonResponsibility";
import Promotion from "../pages/Promotion/Promotion";
import ProductMenu from "../pages/ProductMenu/ProductMenu";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import Article from "../components/Article/Article";
import Article2 from "../components/ArticleExtra/Article2";
import Article3 from "../components/ArticleExtra/Article3";
import Post1 from "../components/Post/Post1";
import Post2 from "../components/Post/Post2";
import Post3 from "../components/Post/Post3";
import Post4 from "../components/Post/Post4";
import Post5 from "../components/Post/Post5";
import Post6 from "../components/Post/Post6";
import Cart from "../pages/Cart/Cart";
import SearchPage from "../pages/SearchPage/SearchPage";
import { path } from "../constants/path";
import ContactPage from "../pages/Contact/ContactPage";
import Checkout from "../pages/Checkout/Checkout";
import { AccountProfile } from "../components/AccountProfile/AccountProfile";
import Account from "../pages/Account/Account";

export default function useRouteElements() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: path.cocoon,
          element: <Home />,
        },
        {
          path: path.home,
          element: <Home />,
        },
        {
          path: path.cart,
          element: <Cart />,
        },
        {
          path: path.search,
          element: <SearchPage />,
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
        {
          path: path.promotion,
          element: <Promotion />,
        },
        {
          path: path.product,
          element: <ProductMenu />,
        },
        {
          path: path.productInfo,
          element: <ProductInfo />,
        },
        {
          path: path.post1,
          element: <Post1 />,
        },
        {
          path: path.post2,
          element: <Post2 />,
        },
        {
          path: path.post3,
          element: <Post3 />,
        },
        {
          path: path.post4,
          element: <Post4 />,
        },
        {
          path: path.post5,
          element: <Post5 />,
        },
        {
          path: path.post6,
          element: <Post6 />,
        },
        {
          path: path.contact,
          element: <ContactPage />,
        },
        {
          path: path.checkout,
          element: <Checkout />,
        },
        {
          path: path.account,
          element: <Account />,
          children: [
            {
              path: "",
              element: <AccountProfile />,
            },
            // {
            //   path: path.address,
            //   element: <AccountAddress />,
            // },
            
          ],
        },
      ],
    },

  ]);
  return element;
}