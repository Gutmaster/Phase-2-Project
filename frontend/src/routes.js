// routes.js
import App from "./App";
import Home from "./pages/Home";
import DonationForm from "./pages/DonationForm";
import Library from "./pages/Library";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            }, 
            {
                path: "/library",
                element: <Library />
            },
            {
                path: "/donate",
                element: <DonationForm />
            }
        ]
    }
];

export default routes;