
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./components/pages/about/About";
import BlogPage from "./components/pages/blog/Blog";
import Category from "./components/pages/category/Category";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home"
import Search from "./components/pages/search/Search";

const router = createBrowserRouter([
  { path: "/",  element: <Home /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/category", element: <Category /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/search", element: <Search /> },
]);

const App = () => <RouterProvider router={router} />


export default App
