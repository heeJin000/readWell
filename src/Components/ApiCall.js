import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';
import XMLParser from "react-xml-parser";


const ApiCall = () => {
  const [data, setData] = useState({});  
  const apiKey = asset.apiKey; 
  
  useEffect(() => {    
    axios({
      method : 'GET',
      url: `/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
    }).then((request) => {
      let xml = new XMLParser().parseFromString(request.data);
      setData(xml);
    })
    .catch(error => console.log(error.response));
  }, []);

  return(
    console.log(data)
    

  );
  
  
} 
export default ApiCall;