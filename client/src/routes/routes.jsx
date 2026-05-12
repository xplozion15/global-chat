import { createBrowserRouter } from "react-router";
import App from "../App";
import { Login } from "../components/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export { routes };
