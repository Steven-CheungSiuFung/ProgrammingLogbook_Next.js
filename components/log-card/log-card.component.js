import classes from "./log-card.module.css";

const LogCard = ({ logData }) => {
  const { title, date, content, createdBy } = logData;
  const dateString = new Date(date).toLocaleDateString("en-GB");
  const contentArray = content.split("\n");
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.date}>{dateString}</p>
      </div>

      <div className={classes.content}>
        {contentArray.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={classes.footer}>
        <p>createdBy: {createdBy}</p>
      </div>
    </div>
  );
};

export default LogCard;
