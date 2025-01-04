import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/landing";
import AboutUs from "../pages/about-us/about-us.page";
import AllProductGrid from "../pages/products/all-products.page";
import HomePageLayout from "../pages/layout/home.layout.page";

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
