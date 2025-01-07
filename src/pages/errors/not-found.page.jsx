import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-700 dark:text-red-500">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-red-600 md:text-4xl dark:text-red-900">
              Something's missing.
            </p>
            <p class="mb-4 text-lg font-light text-red-600 dark:text-red-900">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <NavLink
              to="/"
              class="inline-flex text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-red-900 my-4"
            >
              Back to Homepage
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
export default NotFoundPage;
