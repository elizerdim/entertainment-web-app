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
import "./App.css";
import data from "./data.json";
import { useState } from "react";
import DataItem from "./types/DataItem";

const list: DataItem[] = data;

export default function App() {
  const [dataArr, setDataArr] = useState(list);

  function toggleBookmarked(item: DataItem) {
    const newItem = { ...item, isBookmarked: !item.isBookmarked };
    const itemIndex = dataArr.findIndex((el) => el.title === item.title);
    setDataArr([
      ...dataArr.slice(0, itemIndex),
      newItem,
      ...dataArr.slice(itemIndex + 1),
    ]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <HomePage data={dataArr} toggleBookmarked={toggleBookmarked} />
          }
        />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvseries" element={<TVSeriesPage />} />
        <Route path="/bookmarked" element={<BookmarkedPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
