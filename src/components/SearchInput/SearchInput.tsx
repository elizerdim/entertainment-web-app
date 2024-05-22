import { ReactNode, useState } from "react";
import styles from "./search-input.module.css";
import DataItem from "../../types/DataItem";

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
  const [results, setResults] = useState([] as DataItem[]);

  function showResults(e) {
    e.preventDefault();
    setResults(searchData.filter((i) => i.title.includes(searchInput)));
  }

  return (
    <>
      <form onSubmit={showResults} className={`${styles["seach-bar"]} flex`}>
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
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
      {results.length > 0
        ? results.map((result) => (
            <p key={result.title.split(" ").join("-")}>{result.title}</p>
          ))
        : children}
    </>
  );
}
