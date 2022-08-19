import { connectDB } from "../services/db-utils";

import classes from "./index.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <h1>{`Steven's Programming Logbook`}</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  connectDB();
  return {
    props: {},
  };
};
