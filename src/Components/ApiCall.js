import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';


const ApiCall = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(false);
  const apiKey = asset.apiKey; 
  

  useEffect(() => {    
    const getApi = async() => {
    try{  
        const request = await axios.get(
        `http://localhost:3000/`, 
        `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
        ).then(setData(request.data));
        
    } catch(e) {
      setError(e);
    }
  }
    getApi();
}, []);
    
  console.log(data);
} 
export default ApiCall;