// import data from "../data.json";
import Display from "../components/Display/Display";
import ScrollDisplay from "../components/ScrollDisplay/ScrollDisplay";
import ComponentProps from "../types/ComponentProps";

export default function HomePage(props: ComponentProps) {
  return (
    <main>
      <div className="seach-bar flex">
        <button>
          <img
            src="/app_icons/search-icon.png"
            alt=""
            className="search-icon"
          />
        </button>
        <label htmlFor="search" className="sr-only">
          Search for movies or TV series
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search for movies or TV series"
          className="heading-m"
        />
      </div>
      <section>
        <h1 className="heading-l heading">Trending</h1>
        <ScrollDisplay {...props} />
      </section>
      <section>
        <h2 className="heading-l heading">Recommended for you</h2>
        <Display {...props} />
      </section>
    </main>
  );
}
