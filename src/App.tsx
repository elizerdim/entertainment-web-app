import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarkedPage from "./pages/BookmarkedPage";
import "./App.css"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvseries" element={<TVSeriesPage />} />
        <Route path="/bookmarked" element={<BookmarkedPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
