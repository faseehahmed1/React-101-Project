import { useState } from "react";
import styles from "./Form.module.css";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Form = ({ setItems }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [errorObj, setErrorObj] = useState({
    title: "Error",
    message: "Cannot have a blank field!",
  });

  function addHandleUser(event) {
    event.preventDefault();
    if (name.trim().length === 0 || +age <= 0) {
      setError(true);
      return;
    }
    if (/^[a-z ]+$/i.test(name) === false) {
      setErrorObj({ title: "Error", message: "Name can on have letters!" });
      setError(true);
      return;
    }

    setItems((prevData) => [
      ...prevData,
      { name: name.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()), age: +age },
    ]);
    setName("");
    setAge("");
  }

  return (
    <div>
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
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <label>Age</label>
          <input
            value={age}
            type="number"
            min={0}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
          <Button type="submit" onClick={addHandleUser}>
            Add user
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
