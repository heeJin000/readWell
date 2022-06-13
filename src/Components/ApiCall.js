import axios from 'axios';
import React, {Component} from 'react';


const ApiCall = () => {
  axios.defaults.withCredentials = true;
    
      const response = axios.post(
        'http://localhost:3000/', 'https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbtogether0002243001&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101}'
        ,
        {
          withCredentials:true  // 쿠키 cors 통신 설정
        }).then(response => {
            console.log(response);
          });
    }  



export default ApiCall;