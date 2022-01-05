import React from "react";
import { IPosts } from "../Context/Context";
import styles from "./PostsItem.module.css";

const PostsItem: React.FC<IPosts> = ({
  id,
  poster,
  title,
  price,
  inStock,
}) => {
  const url = "https://wa.me/+77474006125?text=";

  return (
    <div className={styles.container}>
      <img
        src={poster}
        alt=""
        className={`${styles.poster} ${styles.item}`}
      />
      <div className={`${styles.title} ${styles.item}`}>{title}</div>
      <div className={`${styles.inStock} ${styles.item}`}>
        {inStock ? "В наличии" : "Нет в наличии"}
      </div>
      <div className={`${styles.price} ${styles.item}`}>
        {price} &#8376;
      </div>
      {inStock ? (
        <a
          href={url}
          className={`${styles.buyButton} ${styles.item}`}
        >
          Заказать
        </a>
      ) : (
        <div
          className={`${styles.buyButton} ${styles.buyBtnDisabled} ${styles.item}`}
        >
          Заказать
        </div>
      )}
    </div>
  );
};

export default PostsItem;
