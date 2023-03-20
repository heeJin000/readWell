import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';
import React from 'react';
import XMLParser from "react-xml-parser";
import Title from './Title.js';


const ApiCall = () => {
  const [data, setData] = useState([]);  // returnArr:['initialization'],
  const apiKey = asset.apiKey; 
  //const listItems = null;
  //const [listItems, setListItems] = useState([]);

  useEffect(() => {    
     axios.get(
      `/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
    ).then((request) => {
      let xml = new XMLParser().parseFromString(request.data);
      //console.log('안녕하세요', xml.children);
      setData(() => { 
        return (xml.children.slice(11))
      })
    }
  ).catch(error => console.log(error));
}, [])
    return( 
     <ul className="data_list">
       {data.map(response => {
         return(
         <li key={response.attributes.itemId}>
           title: {response.children[0].value} 
         </li>
        )})}
     </ul>
    );
  };
    
export default ApiCall;

