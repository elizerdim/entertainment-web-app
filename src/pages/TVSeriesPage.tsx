import { useContext } from "react";
import Display from "../components/Display/Display";
import SearchInput from "../components/SearchInput/SearchInput";
import { ShowsContext } from "../context/ShowsContext";

export default function TVSeriesPage() {
  const { allShows } = useContext(ShowsContext);
  const tvSeries = allShows.filter((show) => show.category === "TV Series");

  return (
    <SearchInput
      placeholder="Search for TV series"
      searchData={tvSeries}
    >
      <h1>TV Series</h1>
      <Display displayedShows={tvSeries} />
    </SearchInput>
  );
}
