import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../shared/Routes";

const Home = lazy(() => import("../views/Home"))
const RecipeDetails = lazy(() => import("../views/RecipeDetails"))

export const AppRoutes = [
    {
        path: ROUTE_CONSTANTS.HOME,
        element: <Home />,
        title: "Home"
    },
    {
        path: ROUTE_CONSTANTS.RECIPE_DETAILS,
        element: <RecipeDetails />,
        title: "RecipeDetails"
    },
]