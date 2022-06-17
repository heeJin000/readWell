import axios from 'axios';
import React, {useState, useEffect} from 'react';
//import React, {Component} from 'react';

function ApiCall(){
const ApiCall = () => {
  axios.defaults.withCredentials = true;
      useEffect(()=> {
      const response = axios.get(
        'http://localhost:3000/', 
        'https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbtogether0002243001&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101'
        ,
        {
          withCredentials:true  // 쿠키 cors 통신 설정
        }).then(response => {
            console.log(response.data);
          });
        });
    }  
}


export default ApiCall;