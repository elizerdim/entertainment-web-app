import { useState } from "react";
import styles from "./search-input.module.css";
import DataItem from "../../types/DataItem";

type Props = {
  placeholder: string;
  searchData: DataItem[];
};

export default function SearchInput(props: Props) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={`${styles["seach-bar"]} flex`}>
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
        type="text"
        placeholder={props.placeholder}
        className={`${styles["search-input"]} heading-m`}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}
