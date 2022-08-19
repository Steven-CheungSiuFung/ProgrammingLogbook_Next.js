import { useState } from "react";
import { useRouter } from "next/router";
import classes from "./create-log-form.module.css";

const DEFAULT_FORMDATA = {
  title: "",
  date: "",
  content: "",
};

const CreateLogForm = () => {
  const [formData, setFormData] = useState(DEFAULT_FORMDATA);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const onChangeHandler = (event) => {
    const target = event.target.name;
    const value = event.target.value;

    setFormData((formData) => {
      return {
        ...formData,
        [target]: value,
      };
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/logs/create-log", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        router.push("/logs");
      } else {
        const data = await response.json();
        setIsLoading(false);
        console.log("something wrong", data);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("create new log error", error);
    }
  };
  return (
    <form className={classes.logForm} onSubmit={onSubmitHandler}>
      <div className={classes.input}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChangeHandler}
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={onChangeHandler}
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="content">Content</label>
        <textarea
          type="text"
          name="content"
          value={formData.content}
          rows="15"
          onChange={onChangeHandler}
        />
      </div>

      {isLoading ? (
        <div className={classes.loading}>Loading...</div>
      ) : (
        <button className={classes.btn}>Save</button>
      )}
    </form>
  );
};

export default CreateLogForm;
