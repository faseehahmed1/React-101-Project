import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorPopup.module.css";

const ErrorPopup = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
      </div>
    </div>
  );
};

export default ErrorPopup;
