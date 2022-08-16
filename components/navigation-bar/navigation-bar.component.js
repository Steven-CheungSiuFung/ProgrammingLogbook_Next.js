import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import classes from "./navigation-bar.module.css";

const NavigationBar = () => {
  const { data, status } = useSession();
  const authenticated = status === "authenticated";

  const logoutHandler = () => {
    signOut();
  };

  return (
    <div className={classes.container}>
      <Link href="/">
        <div className={classes.home}>Home</div>
      </Link>
      <ul className={classes.list}>
        <Link href="/logs">
          <li className={classes.item}>LOGS</li>
        </Link>
        <Link href="/logs/create-log">
          <li className={classes.item}>POST</li>
        </Link>
        {!authenticated ? (
          <Link href="/login">
            <li className={classes.item}>LOGIN</li>
          </Link>
        ) : (
          <li className={classes.item} onClick={logoutHandler}>
            LOGOUT
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavigationBar;
