import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';


const ApiCall = () => {
  const [data, setData] = useState({});  
  const apiKey = asset.apiKey; 
  
  useEffect(() => {    
    axios({
      method : 'GET',
      url: `/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
    }).then(request => setData(request.data))
    .catch(error => console.log(error.response));
  }, []);

  return(
    console.log(data)
    
   // <li>{data.title}{data.author}</li>

  );
  
  
} 
export default ApiCall;