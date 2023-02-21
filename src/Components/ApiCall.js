import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';
import React from 'react';
import XMLParser from "react-xml-parser";
import Title from './Title.js';


const ApiCall = () => {
  const [data, setData] = useState({ returnArr:['initialization'],});  
  const apiKey = asset.apiKey; 
  let listItems = [];
  //const [listItems, setListItems] = useState([]);

  useEffect(() => {    
     axios.get(
      `/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
    ).then((request) => {
      let xml = new XMLParser().parseFromString(request.data);
      //console.log('안녕하세요', xml.children);
      setData(() => { 
        return {returnArr:xml.children.slice(11),}
      })
      listItems.push(data);
    }
  ).catch(error => console.log(error.response));
}, [])
    return( 
      listItems.map((value)=>{
        return <li>{value}</li>
      })
    );
  };
    
export default ApiCall;

