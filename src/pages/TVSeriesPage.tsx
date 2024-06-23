import { useContext } from "react";
import Display from "../components/Display/Display";
import SearchBar from "../components/SearchBar/SearchBar";
import { ShowsContext } from "../context/ShowsContext";

export default function TVSeriesPage() {
  const { allShows } = useContext(ShowsContext);
  const tvSeries = allShows.filter((show) => show.category === "TV Series");

  return (
    <SearchBar
      placeholder="Search for TV series"
      searchData={tvSeries}
    >
      <main className="container">
        <h1>TV Series</h1>
        <Display displayedShows={tvSeries} />
      </main>
    </SearchBar>
  );
}
