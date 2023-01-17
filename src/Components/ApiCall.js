import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';
import React from 'react';
import XMLParser from "react-xml-parser";


const ApiCall = () => {
  const [data, setData] = useState({ returnArr:['initialization'],});  
  const apiKey = asset.apiKey; 
  
  useEffect(() => {    
     axios.get(
      `/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
    ).then((request) => {
      let xml = new XMLParser().parseFromString(request.data);
      console.log('안녕하세요', xml.children); 
      setData ( () => { 
        return {returnArr:xml.children.slice(11),}
    })}
      ).catch(error => console.log(error.response));
    }, [])
  };
    /*return(
      console.log(data)
    );*/

export default ApiCall;