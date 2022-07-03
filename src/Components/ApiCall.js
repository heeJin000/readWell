import axios from 'axios';
import { useState ,useEffect } from 'react';
import asset from '../asset.js';
//import React, {useState, useEffect} from 'react';

const ApiCall = () => {
  const [data, setData] = useState({});
  const apiKey = asset.apiKey; 

  useEffect(() => {
    const getApi = async() => {
      const request = await axios.get(
        `http://localhost:3000/`, 
        `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
      )
      const requestJson = request.data;

      if(!requestJson) alert('데이터가 존재하지 않습니다.');
      else{
      console.log(requestJson);
      setData(requestJson);
      }
    };
    getApi();
  }, []);
}
export default ApiCall;