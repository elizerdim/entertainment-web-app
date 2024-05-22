import { ReactNode, useState } from "react";
import styles from "./search-input.module.css";
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
      <form className={`${styles["seach-bar"]} flex`}>
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
      <main>
        {results.length <= 0 ? (
          "No shows found"
        ) : searchInput !== "" ? (
          <Display displayedShows={results} />
        ) : (
          children
        )}
      </main>
    </>
  );
}
