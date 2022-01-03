import React from "react";
import styles from "./PostsSearch.module.css";
import { SearchIcon } from "@heroicons/react/outline";

const PostsSearch: React.FC<{
  search: string;
  setSearch: (v: any) => void;
}> = ({ search, setSearch }) => {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.icon} />
      <input
        type="text"
        onChange={(event: any) => setSearch(event.target.value)}
        className={styles.search}
        value={search}
        placeholder="Поиск по сайту"
      />
    </div>
  );
};

export default PostsSearch;
