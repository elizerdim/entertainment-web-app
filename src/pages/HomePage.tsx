import { useContext } from "react";
import Display from "../components/Display/Display";
import ScrollDisplay from "../components/ScrollDisplay/ScrollDisplay";
import SearchBar from "../components/SearchBar/SearchBar";
import { ShowsContext } from "../context/ShowsContext";

export default function HomePage() {
  const { allShows } = useContext(ShowsContext);
  const trending = allShows.filter((show) => show.isTrending);
  const recommended = allShows.filter((show) => !show.isTrending);

  return (
    <SearchBar
      placeholder="Search for movies or TV series"
      searchData={allShows}
    >
      <main className="container">
        <section>
          <h1 className="heading-l heading">Trending</h1>
          <ScrollDisplay trending={trending} />
        </section>
        <section>
          <h2 className="heading-l heading">Recommended for you</h2>
          <Display displayedShows={recommended} />
        </section>
      </main>
    </SearchBar>
  );
}
