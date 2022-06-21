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
          ApiCall();
        }, [])
          if(loading) return <div>로딩 중...</div>
          if(error)   return <div>에러가 발생했습니다</div>
          if(!api)    return null;

          return( 
          <>
          <ul>
            {api.map( api => <li key = {api.id}>{api.data}</li>)}
          </ul>          
          </>
          );
      }  
  }

export default ApiCall;