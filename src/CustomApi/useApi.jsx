import { useState,useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
const useApi = () => {
  const word = useSelector(state => state.word);
   const [data,setData] = useState('');

  useEffect(() => {
    async function fetchData(){
      try{
       const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        // console.log(response.data);
        setData(response.data)
       }
       catch(error){
           console.log(error.message)
       }
      
    }
    fetchData()
  },[word])

  return data
}

export default useApi
