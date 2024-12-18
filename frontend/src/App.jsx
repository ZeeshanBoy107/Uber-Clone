import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import MainHome from "./pages/MainHome";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/riding",
    element: <Riding />,
  },
  {
    path: "/signup",
    element: <UserSignup />,
  },
  {
    path: "/captain-login",
    element: <CaptainLogin />,
  },
  {
    path: "/captain-signup",
    element: <CaptainSignup />,
  },
  {
    path: "/captain-riding",
    element: <CaptainRiding />,
  },
  {
    path: "/home",
    element: (
      <UserProtectWrapper>
        <MainHome />
      </UserProtectWrapper>
    ),
  },
  {
    path: "/captain-home",
    element: (
      <CaptainProtectWrapper>
        <CaptainHome />
      </CaptainProtectWrapper>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
