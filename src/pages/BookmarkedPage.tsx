import { useContext } from "react";
import Display from "../components/Display/Display";
import SearchBar from "../components/SearchBar/SearchBar";
import { ShowsContext } from "../context/ShowsContext";

export default function BookmarkedPage() {
  const { allShows } = useContext(ShowsContext);
  const bookmarkedMovies = allShows.filter(
    (show) => show.isBookmarked && show.category === "Movie"
  );
  const bookmarkedTVSeries = allShows.filter(
    (show) => show.isBookmarked && show.category === "TV Series"
  );
  const bookmarkedShows = [...bookmarkedMovies, ...bookmarkedTVSeries];

  return (
    <SearchBar
      placeholder="Search for bookmarked shows"
      searchData={bookmarkedShows}
    >
      <main className="container">
        <h1 className="sr-only">Bookmarked Movies and TV Series</h1>
        <h2 className="heading-l">Bookmarked Movies</h2>
        <Display displayedShows={bookmarkedMovies} />
        <h2 className="heading-l">Bookmarked TV Series</h2>
        <Display displayedShows={bookmarkedTVSeries} />
      </main>
    </SearchBar>
  );
}
