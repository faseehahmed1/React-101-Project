import { useState, useRef } from "react";
import styles from "./Form.module.css";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Form = ({ setItems }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  let name = nameInputRef.current.value;
  let age = ageInputRef.current.value;
  const [error, setError] = useState(false);
  const [errorObj, setErrorObj] = useState({
    title: "Error",
    message: "Cannot have a blank field!",
  });

  function addHandleUser(event) {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError(true);
      return;
    }
    if (+age <= 0) {
      setErrorObj({ title: "Error", message: "Age must be more than 0!" });
      setError(true);
      return;
    }
    if (/^[a-z ]+$/i.test(name) === false) {
      setErrorObj({ title: "Error", message: "Name can only have letters!" });
      setError(true);
      return;
    }

    setItems((prevData) => [
      ...prevData,
      {
        name: name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()),
        age: +age,
      },
    ]);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  return (
    <>
      {error && (
        <ErrorPopup
          onClick={() => {
            setError(false);
          }}
          title={errorObj.title}
          message={errorObj.message}
        />
      )}
      <Card className={styles.container}>
        <form onSubmit={addHandleUser}>
          <label>Name</label>
          <input
            type="text"
            ref={nameInputRef}
          ></input>
          <label>Age</label>
          <input
            type="number"
            min={0}
            ref={ageInputRef}
          ></input>
          <Button type="submit" onClick={addHandleUser}>
            Add user
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Form;
