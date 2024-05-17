import styles from "./search-input.module.css"

type Props = {
  placeholder: string;
}

export default function SearchInput(props: Props) {
  return (
    <div className={`${styles["seach-bar"]} flex`}>
      <button>
        <img src="/app_icons/search-icon.png" alt="" className={styles["seach-icon"]} />
      </button>
      <label htmlFor="search" className="sr-only">
        Search for movies or TV series
      </label>
      <input
        id="search"
        type="text"
        placeholder={props.placeholder}
        className="heading-m"
      />
    </div>
  );
}
