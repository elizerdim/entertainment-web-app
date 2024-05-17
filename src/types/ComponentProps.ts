import DataItem from "./DataItem";

type ComponentProps = {
  data: DataItem[];
  toggleBookmarked: (arg: DataItem) => void;
}

export default ComponentProps;