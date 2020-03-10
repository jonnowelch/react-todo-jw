import React from "react";
import "./App.css";
import InputBox from "./components/InputBox";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>To Do App</p>
        <InputBox />
      </div>
    );
  }
}

export default App;
