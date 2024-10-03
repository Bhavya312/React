import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBarWrapper from "./components/NavBarWrapper";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ContactForm from "./pages/ContactForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBarWrapper />}>
        <Route path="login" element={<Login />} />
        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <h1>Cart</h1>
            </ProtectedRoutes>
          }
        />
        <Route path="contact-form"  element={<ContactForm />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
