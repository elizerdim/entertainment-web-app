import { useContext } from "react";
import Display from "../components/Display/Display";
import SearchInput from "../components/SearchInput/SearchInput";
import { ShowsContext } from "../context/ShowsContext";

export default function MoviesPage() {
  const { allShows } = useContext(ShowsContext);
  const movies = allShows.filter((show) => show.category === "Movie");

  return (
    <main>
      <SearchInput placeholder="Search for movies" />
      <h1>Movies</h1>
      <Display displayedShows={movies} />
    </main>
  );
}
