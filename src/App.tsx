import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Card from "./Components/Card";
import UserGreeting from "./Components/UserGreeting";
import List from "./Components/List";
import Counter from "./Components/Counter"
import MyComponent from "./Components/MyComponent"

function App() {
  const listItems = ["California", "Texas", "Kansas", "Missouri", "Nebraska"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 40 },
    { id: 3, name: "banana", calories: 109 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 30 },
  ];

  return (
    <>
    <Counter />
      <ListGroup
        listItems={listItems}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="warning">
        MyButton
      </Button>
      <Card></Card>
      <UserGreeting isLoggedIn={true} username="Nisar" />
      <List items={fruits} Category="Fruits" />
      <MyComponent />
    </>
  );
}

export default App;
