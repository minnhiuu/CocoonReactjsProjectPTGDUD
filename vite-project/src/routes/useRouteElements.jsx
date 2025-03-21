import React from "react";
import MainLayout from "../layouts/MainLayout";
import { path } from "../constants/path";
import Home from "../pages/Home/Home";
import CocoonValues from "../pages/Cocoon/CocoonValues";
import Promotion from "../pages/Promotion/Promotion";
import { useRoutes } from "react-router-dom";
import CocoonStory from "../pages/Cocoon/CocoonStory";
import CocoonResponsibility from "../pages/Cocoon/CocoonResponsibility";
import Article from "../components/Article/Article";
import Article2 from "../components/ArticleExtra/Article2";
import Article3 from "../components/ArticleExtra/Article3";

export default function useRouteElements() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,

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
        {
          path: path.promotion,
          element: <Promotion />,
        },
      ],
    },
  ]);
  return element;
}
