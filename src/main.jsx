import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Details from "./pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/AppContext.jsx";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <App />,
    path: "/users",
  },
  {
    element: <Details />,
    path: "/users/:id",
  },
]);

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
