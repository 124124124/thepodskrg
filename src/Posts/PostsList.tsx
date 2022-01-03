import React from "react";
import styles from "./PostsList.module.css";

const PostsList: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PostsList;
