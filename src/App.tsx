import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import { AppProvider } from "./Context/Context";
import { LoginContext } from "./Context/LoginContext";
import Posts from "./Posts/Posts";
import Error404 from "./Error/Error404";
import Login from "./Login/Login";

const App: React.FC = () => {
  const routes = [
    { path: "/", element: <Posts /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Error404 /> },
  ];

  return (
    <AppProvider>
      <LoginContext>
        <BrowserRouter>
          <Routes>
            {routes.map((item, index) => {
              return <Route key={index} {...item} />;
            })}
          </Routes>
        </BrowserRouter>
      </LoginContext>
    </AppProvider>
  );
};

export default App;
