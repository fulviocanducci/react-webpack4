import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from './components/Header';
import Input from "./components/Input";

function App () {
  const [value, setValue] = useState(null);
  function handleChangeValue(e) {
    setValue(e.target.value);
  }
  return (
    <>
      {value}
      <Header />
      <Input type="text" name="name1" value={value} change={handleChangeValue} />
    </>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));