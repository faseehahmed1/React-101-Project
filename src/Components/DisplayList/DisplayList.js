import Card from "../Card/Card";
import classes from "./DisplayList.module.css";

const DisplayList = ({ items }) => {
    console.log(items)
  return (
    <Card className={classes.container}>
    <ul>
    <p>List of users</p>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <li key={item.name}>
            {item.name} ({item.age} years old)
          </li>
        ))}
    </ul>
    </Card>
  );
};

export default DisplayList;
