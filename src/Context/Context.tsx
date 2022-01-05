import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IPosts {
  id: number;
  poster?: string;
  title: string;
  price: string | number;
  inStock?: boolean;
}

const Context = createContext<Partial<{ posts: IPosts[] }>>({});

const useCtx = () => useContext(Context);

const AppProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    fetch("https://thepodskrg-api.herokuapp.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={{ posts }}>{children}</Context.Provider>
  );
};

export { AppProvider, useCtx, IPosts };
