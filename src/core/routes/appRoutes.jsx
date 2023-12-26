import { createBrowserRouter } from "react-router-dom";
import { HomeView } from "./Ruta/Home/Home_view";
import { Layout } from "../layout/Layout";
import { AppModal } from "../components/appModal/appModal";
import { AppCategory } from "./Ruta/Categorias/AppCategory";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
      element: <Layout/>,
      children: [
        {
            path: "/",
            // index: true,
            exact: true,

            element: <HomeView/>,
          //   loader: rootLoader,
            children: [
              {
                path: ":idDrink",
                element: <AppModal/>,
              }
            ]
          
        },
        {
          path: "coffee-and-tea",
          element: <AppCategory category="Coffee \/ Tea"/>,
          // loader: teamLoader,
          children: [
            {
              path: ":idDrink",
              element: <AppModal/>,
            },
          ],        
        },
        {
            path: "ordinary-drink",
            element: <AppCategory category="Ordinary Drink"/>,
            children: [
              {
                path: ":idDrink",
                element: <AppModal/>,
              },
            ],
        },
        {
            path: "other",
            element: <AppCategory category="Other \/ Unknown "/>,
            children: [
              {
                path: ":idDrink",
                element: <AppModal/>,
              },
            ],
        },
        {
            path: "shot",
            element: <AppCategory category="Shot"/>,
            children: [
              {
                path: ":idDrink",
                element: <AppModal/>,
              },
            ],
        },
        {
          path: "cocktail",
          element: <AppCategory category="Cocktail"/>,
          children: [
            {
              path: ":idDrink",
              element: <AppModal/>,
            },
          ],
        },
        {
            path: "punch-and-party-drink",
            element: <AppCategory category="Punch \/ Party Drink"/>,
            children: [
              {
                path: ":idDrink",
                element: <AppModal/>,
              },
            ],
        },
        {
            path: "beer",
            element: <AppCategory category="Beer"/>,
            children: [
              {
                path: ":idDrink",
                element: <AppModal/>,
              },
            ],
        },
        {
            path: "soft-drink",
            element: <AppCategory category="Soft Drink"/>,
            children: [
              {
                path: ":idDrink",
                element: <AppModal/>,
              },
            ],
        }
        ,
        {
          path: "homemade-liqueur",
          element: <AppCategory category="Homemade Liqueur"/>,
          children: [
            {
              path: ":idDrink",
              element: <AppModal/>,
            },
          ],
        },
        {
          path: "shake",
          element: <AppCategory category="Shake"/>,
          children: [
            {
              path: ":idDrink",
              element: <AppModal/>,
            },
          ],
        },
        {
          path: "cocoa",
          element: <AppCategory category="Cocoa"/>,
          children: [
            {
              path: ":idDrink",
              element: <AppModal/>,
            },
          ],
        },
         
      ],
    },
  ]);