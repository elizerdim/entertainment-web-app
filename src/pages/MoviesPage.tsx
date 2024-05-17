import Display from "../components/Display/Display";
import SearchInput from "../components/SearchInput/SearchInput";
import ComponentProps from "../types/PageProps";

export default function MoviesPage(props: ComponentProps) {
  return (
    <main>
      <SearchInput placeholder="Search for movies" />
      <h1>Movies</h1>
      <Display {...props} />
    </main>
  )
}