import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

import CreateLogForm from "../../components/create-log-form/create-log-form.component";

import classes from "./create-log.module.css";

const CreateLogPage = () => {
  return (
    <div className={classes.container}>
      <h1>Create New Log</h1>
      <CreateLogForm />
    </div>
  );
};

export default CreateLogPage;

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

  return {
    props: {},
  };
};
