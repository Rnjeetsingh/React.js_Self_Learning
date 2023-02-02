import React from 'react'
import { useEffect,useState } from 'react'

function UseFetch(url) {
  const [data,setData] = useState([]);

  useEffect(() => {
   async function getData(){
    const call = await fetch([url]);
    const res = await call.json();
    setData(res);
    }
    getData();
  },[])



  return ([data])
}

export default UseFetch
