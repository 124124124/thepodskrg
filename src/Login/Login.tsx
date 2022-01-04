import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useCtx } from "../Context";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const { authData, changeAuth } = useCtx();

  const { isAuth, setAuth } = changeAuth;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = (event: FormEvent) => {
    event.preventDefault();

    if (
      username === authData?.username &&
      password === authData?.password
    ) {
      setAuth(true);
      localStorage.setItem("username", username);
      localStorage.setItem("password", username);
    }
  };

  const exit = () => {
    localStorage.clear();
    setAuth(false);
  };

  if (isAuth) {
    return (
      <div>
        <div className="title">Вы Админ</div>
        <button onClick={exit}>Выйти</button>
      </div>
    );
  } else {
    return (
      <form
        onSubmit={(event: FormEvent) => auth(event)}
        className={styles.container}
        onChange={(e: any) => {
          e.target.name === "username"
            ? setUsername(e.target.value)
            : setPassword(e.target.value);
        }}
      >
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
        <input type="submit" value="Войти" />
        <Link to="/">Посты</Link>
      </form>
    );
  }
};

export default Login;
