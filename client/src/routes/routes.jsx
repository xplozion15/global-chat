import { createBrowserRouter } from "react-router";
import App from "../App";
import { Login } from "../components/Login/Login";
import { Signup } from "../components/Signup/Signup";
import { Chats } from "../components/Chats/Chats";
import { Dms } from "../components/Dms/Dms";
import { Friends } from "../components/Friends/Friends";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Chats />,
      },
      {
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/dms",
        element: <Dms />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export { routes };
