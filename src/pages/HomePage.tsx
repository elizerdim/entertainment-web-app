import { useContext } from "react";
import Display from "../components/Display/Display";
import ScrollDisplay from "../components/ScrollDisplay/ScrollDisplay";
import SearchInput from "../components/SearchInput/SearchInput";
import { ShowsContext } from "../context/ShowsContext";

export default function HomePage() {
  const { allShows } = useContext(ShowsContext);
  const trending = allShows.filter((s) => s.isTrending);
  const recommended = allShows.filter((s) => !s.isTrending);

  return (
    <main>
      <SearchInput placeholder="Search for movies or TV series" />
      <section>
        <h1 className="heading-l heading">Trending</h1>
        <ScrollDisplay trending={trending} />
      </section>
      <section>
        <h2 className="heading-l heading">Recommended for you</h2>
        <Display displayedShows={recommended} />
      </section>
    </main>
  );
}
