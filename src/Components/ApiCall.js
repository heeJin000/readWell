import axios from 'axios';
import asset from '../asset.js';
//import React, {useState, useEffect} from 'react';


const ApiCall = () => {
  axios.defaults.withCredentials = true;
  const apiKey = asset.apiKey;  
  const response = axios.get(
    `http://localhost:3000/`, 
    `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
    ,
    {withCredentials:true  // 쿠키 cors 통신 설정
    }).then(response => {
        console.log(response.data);
      });
}  
export default ApiCall;