import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home.jsx";
import  Cart from "../component/Cart.jsx";
import About from "../component/About.jsx";
import Contact from "../component/Contact.jsx";
import App from "../App.jsx";
import Body from "../component/Body.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children:[
            {
            path: "/",
            Component:Body,
        },
        {
            path: "/Home",
            Component: Home,
        },
        {
            path: "/about",
            Component: About,
        },
        {
            path: "/contact",
            Component: Contact,
        },
        {
            path: "/cart",
            Component: Cart,
        }
        
    ]
}
]);

export default appRouter;