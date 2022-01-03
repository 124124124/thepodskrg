import React, { createContext, useContext, useState } from "react";

interface IContext {
  posts: IPosts[];
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
    <Context.Provider value={{ posts }}>{children}</Context.Provider>
  );
};

export { AppProvider, useCtx, IPosts };
