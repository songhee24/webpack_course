import {createRoot} from "react-dom/client";
import App from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AboutLazy} from "./pages/about/About.lazy";
import {ShopLazy} from "./pages/shop/Shop.lazy";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <AboutLazy />
            },
            {
                path: '/shop',
                element: <ShopLazy/>
            }
        ]
    },
]);

const container = createRoot(root)
container.render(
    <RouterProvider router={router}/>
)
