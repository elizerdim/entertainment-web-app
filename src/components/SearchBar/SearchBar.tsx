import { ReactNode, useState } from "react";
import styles from "./search-bar.module.css";
import DataItem from "../../types/DataItem";
import Display from "../Display/Display";

type Props = {
  placeholder: string;
  searchData: DataItem[];
  children: ReactNode;
};

export default function SearchInput({
  placeholder,
  searchData,
  children,
}: Props) {
  const [searchInput, setSearchInput] = useState("");

  // This array is filled with all shows at the beginning
  const results = searchData.filter((i) =>
    i.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`${styles["seach-bar"]} flex`}
      >
        <button>
          <img
            src="/app_icons/search-icon.png"
            alt=""
            className={styles["seach-icon"]}
          />
        </button>
        <label htmlFor="search" className="sr-only">
          Search for movies or TV series
        </label>
        <input
          id="search"
          type="search"
          placeholder={placeholder}
          className={`${styles["search-input"]} heading-m`}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </form>
      {results.length <= 0 ? (
        <main>
          <p className={styles["not-found"]}>"No shows found"</p>
        </main>
      ) : searchInput !== "" ? (
        <main>
          <Display displayedShows={results} />
        </main>
      ) : (
        children
      )}
    </>
  );
}
