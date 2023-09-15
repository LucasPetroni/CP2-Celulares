import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Error404 from "./routes/Error/Error404.jsx";
import Produtos from "./routes/Produtos/Produtos.jsx";
import VisualizarProdutos from "./routes/Produtos/VisualizarProduto.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/produto/:id", element: <VisualizarProdutos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
