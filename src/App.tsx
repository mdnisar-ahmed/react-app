import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  const listItems = ["California", "Texas", "Kansas", "Missouri", "Nebraska"];
  const [alertVisible,setAlertVisibility]=useState(false);

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        listItems={listItems}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      { alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>
       My Alert
      </Alert>}
      <Button onClick={()=>setAlertVisibility(true)} color="warning">MyButton</Button>
    </div>
  );
}

export default App;
