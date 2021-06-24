import React from "react";
import Button from "./Button";
import { buttons } from "./data/buttons";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="display" />
        {buttons.map(({ id, colorType, value }) => (
          <Button colorType={colorType} id={id} key={id}>
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
