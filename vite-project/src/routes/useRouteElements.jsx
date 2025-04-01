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
import ContactPage from "../pages/Contact/ContactPage";
import ArticlePage from "../pages/Article/ArticlePage";
import ArticleBeauty from "../pages/Article/ArticleBeauty";
import ArticleCharity from "../pages/Article/ArticleCharity";
import Post1 from "../components/Post/Post1";
import Post2 from "../components/Post/Post2";
import Post3 from "../components/Post/Post3";
import Post4 from "../components/Post/Post4";
import Post5 from "../components/Post/Post5";
import Post6 from "../components/Post/Post6";
import Pay from "../components/Pay/Pay";
import { path } from "../constants/path";


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
          element: <ArticlePage />,
        },
        {
          path: path.beauty,
          element: <ArticleBeauty />,
        },
        {
          path: path.charity,
          element: <ArticleCharity />,
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
          path: path.contact,
          element: <ContactPage />,
        },
        {
          path: path.checkout,
          element: <Pay />,
        },
      ],
    },

  ]);
  return element;
}