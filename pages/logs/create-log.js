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
