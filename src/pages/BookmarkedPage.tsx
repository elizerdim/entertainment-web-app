import { useContext } from "react";
import Display from "../components/Display/Display";
import SearchInput from "../components/SearchInput/SearchInput";
import { ShowsContext } from "../context/ShowsContext";

export default function BookmarkedPage() {
  const { allShows } = useContext(ShowsContext);
  const bookmarkedMovies = allShows.filter((show) => show.isBookmarked && show.category === "Movie");
  const bookmarkedTVSeries = allShows.filter((show) => show.isBookmarked && show.category === "TV Series");

  return (
    <main>
      <SearchInput placeholder="Search for movies" />
      <h1 className="sr-only">Bookmarked Movies and TV Series</h1>
      <h2>Bookmarked Movies</h2>
      <Display displayedShows={bookmarkedMovies} />
      <h2>Bookmarked TV Series</h2>
      <Display displayedShows={bookmarkedTVSeries} />
    </main>
  );
}