import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IContext {
  posts: IPosts[];
  authData: IAuth;
  changeAuth: any;
  isLogin: boolean;
}
interface IAuth {
  username?: string | any;
  password?: string | any;
}
interface IPosts {
  id: number;
  poster?: string;
  title: string;
  price: string | number;
  inStock?: boolean;
}
const Context = createContext<Partial<IContext>>({});
const useCtx = () => useContext(Context);

const AppProvider: React.FC = ({ children }) => {
  const [authData] = useState<IAuth>({
    username: "zharyq",
    password: "123456zh",
  });

  const [isAuth, setAuth] = useState<boolean>(false);
  const changeAuth = { isAuth, setAuth };

  const [data, setData] = useState<IAuth>({
    username: "",
    password: "",
  });

  const isLoginned =
    data?.username === authData.username ? true : false;

  useEffect(() => {
    setData({
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    });
    setAuth(isLoginned);
  }, [isLoginned]);

  const [posts] = useState<IPosts[]>([
    {
      id: 1,
      poster:
        "https://ecosmoke.kz/upload/iblock/ad9/ad9cff7c4d7d75538064e02102048b51.jpg",
      title: "Elf Bar Lux 1500 WATERMELON (Арбуз) 20мг в EcoSmoke",
      price: "3 990",
      inStock: true,
    },
    {
      id: 2,
      poster:
        "https://ecosmoke.kz/upload/iblock/d9e/d9ec29602999ea695e5c02ddc423d30f.jpg",
      title:
        "lf Bar Crystal 2500 Banana Ice 50мг (ледяной банан) в EcoSmoke ",
      price: "3 490",
      inStock: false,
    },
    {
      id: 3,
      poster:
        "https://ecosmoke.kz/upload/iblock/3a5/3a51f8e9cf7139038e9194a03f0e70f6.jpg",
      title:
        "lf Bar Lux 1500 BLUE RAZZ LEMONADE (Синяя малина) 50мг в EcoSmoke",
      price: "3 490",
      inStock: true,
    },
  ]);

  return (
    <Context.Provider value={{ posts, changeAuth, authData }}>
      {children}
    </Context.Provider>
  );
};

export { AppProvider, useCtx, IPosts, IAuth };
