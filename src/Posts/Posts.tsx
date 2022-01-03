import React, { useEffect, useState } from "react";
import { useCtx } from "../Context";
import styles from "./Posts.module.css";
import PostsList from "./PostsList";
import PostsSearch from "./PostsSearch";
import PostsItem from "./PostsItem";
import Loading from "../Loading/Loading";

const Posts: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { posts } = useCtx();
  const [search, setSearch] = useState<string>("");

  const filtredPosts = () =>
    posts?.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

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
          <PostsSearch setSearch={setSearch} search={search} />
          <PostsList>
            {filtredPosts()?.length ? (
              filtredPosts()?.map((item) => {
                return <PostsItem key={item.id} {...item} />;
              })
            ) : (
              <div className={styles.notFound}>
                Упс, ничего не нашел!😢
              </div>
            )}
          </PostsList>
        </div>
      )}
    </React.Fragment>
  );
};

export default Posts;
