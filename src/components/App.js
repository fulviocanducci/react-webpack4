import React, { useState } from 'react';
import Header from './Header';
import Input from "./Input";
import Post from './Post';

export default function App () {
  const [value, setValue] = useState(null);
  function handleChangeValue(e) {
    setValue(e.target.value);
  }
  return (
    <>
      {value}
      <Header />
      <Input name="name1" value={value} change={handleChangeValue} />
      <Post/>
    </>
  )
};