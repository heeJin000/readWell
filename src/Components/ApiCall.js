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
      const requestJson = await request;
      console.log("json", requestJson);
      setData(requestJson);
    };
    getApi();
  }, []);

    console.log(data)
}
export default ApiCall;