import React, {Component} from 'react';
import Title from "./Components/Title";
import Thumbnail from "./Components/Thumbnail.js";
import ApiCall from "./Components/ApiCall.js";
import './App.css';

const App = () => {
  return (
    <div className="App">
      
        <Title></Title>        
      
        <Thumbnail></Thumbnail>
    
        <Thumbnail></Thumbnail>

        <ApiCall></ApiCall>

    </div>
  );
}
export default App;
