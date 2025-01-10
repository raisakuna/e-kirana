import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/landing";
import AboutUs from "../pages/about-us/about-us.page";
import AllProductGrid from "../pages/products/all-products.page";
import HomePageLayout from "../pages/layout/home.layout.page";
import UserLayoutPage from "../pages/layout/user-layout.page";
import AdminDashboardPage from "../pages/dashboard/admin-dashboard.page";
import CategoryWiseProductList from "../pages/category/category-product-list.page";
import NotFoundPage from "../pages/errors/not-found.page";
import LoginPage from "../pages/auth/login/login.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      { path: "products", element: <AllProductGrid /> },
      {
        path: "category/:slug",
        element: <CategoryWiseProductList />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <UserLayoutPage role="admin" />,
    childre: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: "*",
        element: <NotFoundPage link="/admin" />,
      },
    ],
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/products" element={<AllProductGrid />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
};
export default Routing;
