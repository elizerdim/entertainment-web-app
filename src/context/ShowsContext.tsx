import { ReactNode, createContext, useState } from "react";
import data from "../data.json";
import DataItem from "../types/DataItem";

type ShowsProviderProps = {
  children: ReactNode;
};

type ShowsContext = {
  allShows: DataItem[];
  movies: DataItem[];
  tvSeries: DataItem[];
  bookmarked: DataItem[];
  toggleBookmarked: (item: DataItem) => void;
};

const ShowsContext = createContext({} as ShowsContext);

export default function ShowsProvider({ children }: ShowsProviderProps) {
  const [allShows, setAllShows] = useState(data);

  const movies = allShows.filter((show) => show.category === "Movie");
  const tvSeries = allShows.filter((show) => show.category === "TV Series");
  const bookmarked = allShows.filter((show) => show.isBookmarked);

  // TODO: Fix the TypeScript error here
  function toggleBookmarked(show: DataItem) {
    const newShow = { ...show, isBookmarked: !show.isBookmarked };
    setAllShows(
      allShows.map((s) => {
        if (s.title === show.title) {
          return newShow;
        } else {
          return s;
        }
      })
    );
  }

  return (
    <ShowsContext.Provider
      value={{
        allShows,
        movies,
        tvSeries,
        bookmarked,
        toggleBookmarked,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
}
