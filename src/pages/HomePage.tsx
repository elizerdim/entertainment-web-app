// import data from "../data.json";
import Display from "../components/Display/Display";
import ScrollDisplay from "../components/ScrollDisplay/ScrollDisplay";
import SearchInput from "../components/SearchInput/SearchInput";
import PageProps from "../types/PageProps";

export default function HomePage(props: PageProps) {
  const trending = props.data.filter((item) => item.isTrending);
  const recommended = props.data.slice(5);

  return (
    <main>
      <SearchInput placeholder="Search for movies or TV series" />
      <section>
        <h1 className="heading-l heading">Trending</h1>
        <ScrollDisplay trending={trending} toggleBookmarked={props.toggleBookmarked} />
      </section>
      <section>
        <h2 className="heading-l heading">Recommended for you</h2>
        <Display recommended={recommended} toggleBookmarked={props.toggleBookmarked} />
      </section>
    </main>
  );
}
