import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Error404.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Error404: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.title}>
            Страница {location.pathname} не найдена!
          </div>
          <Link className={styles.button} to="/posts">
            Посты
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default Error404;
