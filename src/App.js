import React, {Component} from 'react';
import {render} from 'react-dom';
import Title from "./Components/Title";
import Content from "./Components/Content.js";
import ApiCall from "./Components/ApiCall.js";
import './App.css';

const App = () => {
  return (
    <div className="App">
      
        <Title></Title>        
      
        <Content></Content>

        <Content></Content>


        <ApiCall></ApiCall>

    </div>
  );
}
export default App;
