import logo from './logo.svg';
import styles from './App.module.css'
import Form from './Components/Form/Form';
import DisplayList from './Components/DisplayList/DisplayList';
import ErrorPopup from './Components/ErrorPopup/ErrorPopup';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
console.log(JSON.parse(localStorage.getItem('items')))

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className={styles.container}>
      <Form setItems={setItems}/>
      <DisplayList items={items}/>
    </div>
  );
}

export default App;
