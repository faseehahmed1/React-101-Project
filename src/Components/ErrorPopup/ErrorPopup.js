import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorPopup.module.css";
import ReactDom from 'react-dom';

const Backdrop = (props)=>{
return (<div className={classes.backdrop} onClick={props.onClick}></div>)
}

const Overlay = (props)=>{
  return (
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
  )
}

const ErrorPopup = (props) => {
  return (
    <div>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<Overlay title={props.title} message={props.message} onClick={props.onClick}/>, document.getElementById('overlay-root'))}
    </div>
  );
};

export default ErrorPopup;
