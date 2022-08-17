import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import classes from "./login-form.module.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!isLogin) {
      try {
        const response = await fetch("/api/auth/create-user", {
          method: "POST",
          body: JSON.stringify(formFields),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.error) {
          setErrorMessage(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formFields.email,
          password: formFields.password,
        });
        if (result.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
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
        {errorMessage && (
          <div className={classes.error}>
            <p>Error: {errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
