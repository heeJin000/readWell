import axios from 'axios';
import React, {useState, useEffect} from 'react';

function ApiCall(){

  const [api, setApi] = useState(null);
  const [loading,setLoading] = useState(false); // 로딩되는지 여부
  const [error,setError] = useState(null); //에러

  const ApiCall = async() => {
    try{
      setApi(null);
      setError(null);
      setLoading(true); //로딩이 시작됨

      const response = await axios.get('https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbtogether0002243001&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101');
      setApi(response.data);
    } catch(e){
        setError(e);
    }
    setLoading(false);

        useEffect(()=> {
        axios.get(
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