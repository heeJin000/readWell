import React, {Component} from 'react';
import Title from "./Components/Title";
import Content from "./Components/Content.js";
import ApiConnect from "./Components/ApiCall.js";
import './App.css';

const App = () => {
  return (
    <div className="App">
      
        <Title></Title>        
      
        <Content></Content>

        <Content></Content>

        <ApiConnect></ApiConnect>

    </div>
  );
}
export default App;
