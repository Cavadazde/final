import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import ClienRoot from "../pages/mainRoot";




export const ROUTER=[{
    path:"/",
    element:<ClienRoot/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'add',
            element:<Add/>
        },
        {
            path:'basket',
            element:<Basket/>
        },   {
            path:':id',
            element:<Detail/>
        },   {
            path:'add',
            element:<Add/>
        }
    ]

}]