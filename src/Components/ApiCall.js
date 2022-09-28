import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';


const ApiCall = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const apiKey = asset.apiKey; 

  
  const getApi = () => {
        return axios.get(
        `http://localhost:3000/`, 
        `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
        )}

  useEffect(() => {    
    getApi().then((response) => {setData(response)});
  }, []);
    
  if(data == null) console.log('데이터가 없습니다.');
    
  console.log(data.data);
} 
export default ApiCall;