import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage.js";
import BaseLayout from "./layouts/BaseLayout/BaseLayout.js";
import HomePage from "./pages/home/HomePage.js";


const router = createBrowserRouter([

    {
        path: "/",
        element: <BaseLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
        ]
    },
]);


export default router;