import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headermain from "./components/header/Headermain";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import AnimatedCursor from "./hooks/AnimatedCursor";
import Socialicons from "./components/socialicons/Socialicons"
import Project from "./Pages/Project/Project";

const Main = () => {
  return (
    <>
      <Headermain />
      <Outlet />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      }, 
      {
        path: "/About",
        element: <About/>,
      },  {
        path: "/Contact",
        element: <Contact/>,
      },  {
        path: "/Project",
        element: <Project/>,
      }
    ],
  },
]);

function App() {
  return (
    <>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Socialicons/>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
