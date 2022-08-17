import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

import { readAllLogsDB } from "../../services/db-utils";
import LogCard from "../../components/log-card/log-card.component";

import classes from "./index.module.css";

const LogsPage = ({ logsData }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>All Logs</h1>
      {logsData.map((logData) => (
        <LogCard key={logData._id} logData={logData} />
      ))}
    </div>
  );
};

export default LogsPage;

export const getServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const response = await readAllLogsDB(session.user.email);
  const data = JSON.parse(JSON.stringify(response));

  return {
    props: {
      logsData: data,
    },
  };
};
