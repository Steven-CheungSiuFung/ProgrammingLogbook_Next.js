import Link from "next/link";

import classes from "./navigation-bar.module.css";

const NavigationBar = () => {
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
        <Link href="/login">
          <li className={classes.item}>LOGIN</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationBar;
