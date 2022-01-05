import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useLoginCtx } from "../Context/LoginContext";
import styles from "./Login.module.css";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const Login: React.FC = () => {
  const [passVisible, setPassVisble] = useState(false);

  const [classnames, setClassNames] = useState(styles.input);

  const { validUserData, removeLocalAndCookie, saveCookies, isAuth } =
    useLoginCtx();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isValidUserData = (event: FormEvent) => {
    event.preventDefault();
    if (
      username === validUserData?.username &&
      password === validUserData?.password
    ) {
      saveCookies(username, password);
    } else {
      setClassNames((prev) => `${prev} ${styles.error}`);
    }
  };

  if (isAuth) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <div className={styles.status}>Статус: Админ</div>
        <div className={styles.buttons}>
          <input
            className={styles.submit}
            type="submit"
            value="Выйти"
            onClick={removeLocalAndCookie}
          />
          <Link className={styles.submit} to="/">
            Посты
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <form
        onSubmit={(event: FormEvent) => isValidUserData(event)}
        className={styles.container}
        onChange={(e: any) => {
          e.target.name === "username"
            ? setUsername(e.target.value)
            : setPassword(e.target.value);
        }}
      >
        <input
          onChange={() => setClassNames(styles.input)}
          className={classnames}
          type="text"
          name="username"
          placeholder="Имя пользователя"
          autoComplete="off"
          maxLength={16}
        />
        <div className={styles.password}>
          <input
            maxLength={32}
            autoComplete="off"
            onChange={() => setClassNames(styles.input)}
            className={classnames}
            type={passVisible ? "text" : "password"}
            name="password"
            placeholder="Пароль"
          />
          <div
            className={styles.toggle}
            onClick={() =>
              passVisible ? setPassVisble(false) : setPassVisble(true)
            }
          >
            {passVisible ? (
              <EyeOffIcon style={{ height: "22px" }} />
            ) : (
              <EyeIcon style={{ height: "22px" }} />
            )}
          </div>
        </div>
        {classnames.includes(styles.error) ? (
          <div className={styles.errorMessage}>
            Имя пользователя или пароль неверный!
          </div>
        ) : (
          ""
        )}
        <div className={styles.buttons}>
          <input
            className={styles.submit}
            type="submit"
            value="Войти"
          />
          <Link className={styles.submit} to="/">
            Посты
          </Link>
        </div>
      </form>
    );
  }
};

export default Login;
