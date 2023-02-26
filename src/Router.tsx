import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import LandingNote from "./routes/LandingNote";
import Solutions from "./routes/Solutions";

/**
 * ghpage에 올리기 위해 react-router-dom의 createHashRouter 사용
 * createHashRouter를 사용하면 root url에 #이 붙으므로
 * 원래는 createBrowserRouter 사용할 것
 */
const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "notes",
                element: <LandingNote />,
                children: [
                    {
                        path: "solutions",
                        element: <Solutions />, 
                    },
                ],
            },{
                path: "",
                element: <Home />,
            },
        ],
    }
]);


export default router;