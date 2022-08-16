import { useState } from "react";
import classes from "./login-form.module.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formFields);
  };

  const onToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{isLogin ? "LOGIN" : "REGISTER"}</h1>
      <form className={classes.loginForm} onSubmit={onSubmitHandler}>
        <div className={classes.input}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formFields.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">password</label>
          <input
            type="password"
            name="password"
            value={formFields.password}
            onChange={onChangeHandler}
          />
        </div>

        <button className={classes.btn}>
          {isLogin ? "Login" : "Register"}
        </button>
        <div className={classes.changeForm} onClick={onToggleForm}>
          <p>{`Change to ${isLogin ? "register" : "login"}`}</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
