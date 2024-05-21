import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import WishList from "../pages/Wishlist";
import Mainroot from "../pages/mainRoot";

export const ROUTES = [
  {
    path: "/",
    element: <Mainroot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
    ],
  },
];
