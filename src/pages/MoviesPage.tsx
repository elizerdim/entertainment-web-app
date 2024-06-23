import { useContext } from "react";
import Display from "../components/Display/Display";
import SearchBar from "../components/SearchBar/SearchBar";
import { ShowsContext } from "../context/ShowsContext";

export default function MoviesPage() {
  const { allShows } = useContext(ShowsContext);
  const movies = allShows.filter((show) => show.category === "Movie");

  return (
    <SearchBar
      placeholder="Search for movies"
      searchData={movies}
    >
      <main className="container">
        <h1>Movies</h1>
        <Display displayedShows={movies} />
      </main>
    </SearchBar>
  );
}
