import {
    createBrowserRouter,
  } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import SignupForm from "../components/SignUp";
import Todo from "../components/Todo";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignupForm/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/todo",
        element:<Todo/>
      }
  ]);

