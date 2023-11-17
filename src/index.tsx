import {createRoot} from "react-dom/client";
import App from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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
                element: <h1>about</h1>
            },
            {
                path: '/shop',
                element: <h1>shop</h1>
            }
        ]
    },
]);

const container = createRoot(root)
container.render(
    <RouterProvider router={router}/>
)
