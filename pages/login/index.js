import LoginForm from "../../components/login-form/login-form.component";

import classes from "./index.module.css";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
