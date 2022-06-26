import axios from 'axios';
import { useEffect } from 'react';
import asset from '../asset.js';
//import React, {useState, useEffect} from 'react';

function ApiConnect(){
const ApiCall = () => {
  const apiKey = asset.apiKey;  
  const request = axios.get(
    `http://localhost:3000/`, 
    `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
    )
    useEffect(() => { 
      ApiCall();
    }, []);
  }
}  
export default ApiConnect;