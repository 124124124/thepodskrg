import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface IContext {
  validUserData: {
    username: string;
    password: string;
  };
  isLocalValid: boolean;
  removeLocalAndCookie: any;
  saveCookies: any;
  isAuth: boolean;
}
const Context = createContext<Partial<IContext>>({});
const useLoginCtx = () => useContext(Context);

const LoginContext: React.FC = ({ children }) => {
  const validUserData = { username: "zha", password: "123" };

  const [isAuth, setAuth] = useState<boolean>(false);

  const [cookie, setCookie, removeCookie] = useCookies();

  const optionsCookie = {
    secure: true,
    samSite: true,
  };

  const isLocalValid =
    validUserData.username === cookie.username &&
    validUserData.password === cookie.password
      ? true
      : false;

  const saveCookies = (username: string, password: string) => {
    setCookie("username", username, optionsCookie);
    setCookie("password", password, optionsCookie);
    setAuth(true);
  };

  const removeLocalAndCookie = () => {
    removeCookie("username", optionsCookie);
    removeCookie("password", optionsCookie);
    setAuth(false);
  };

  const isLogin = isLocalValid ? true : false;

  useEffect(() => {
    setAuth(isLogin);
  }, [isLogin]);

  return (
    <Context.Provider
      value={{
        validUserData,
        removeLocalAndCookie,
        saveCookies,
        isLocalValid,
        isAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { LoginContext, useLoginCtx };
