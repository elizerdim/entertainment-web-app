import DataItem from "./DataItem";

type PageProps = {
  data: DataItem[];
  toggleBookmarked: (arg: DataItem) => void;
}

export default PageProps;