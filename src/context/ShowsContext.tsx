import { ReactNode, createContext } from "react";
import data from "../data.json";
import DataItem from "../types/DataItem";
import { useImmer } from "use-immer";

type ShowsProviderProps = {
  children: ReactNode;
};

type ShowsContext = {
  allShows: DataItem[];
  bookmarked: DataItem[];
  toggleBookmarked: (item: DataItem) => void;
};

export const ShowsContext = createContext({} as ShowsContext);

export default function ShowsProvider({ children }: ShowsProviderProps) {
  const [allShows, updateAllShows] = useImmer(data);

  const bookmarked = allShows.filter((show) => show.isBookmarked);

  function toggleBookmarked(show: DataItem) {
    updateAllShows((draft) => {
      const nextShow = draft.find((s) => s.title === show.title);
      nextShow!.isBookmarked = !show.isBookmarked;
    });
  }

  return (
    <ShowsContext.Provider
      value={{
        allShows,
        bookmarked,
        toggleBookmarked,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
}
