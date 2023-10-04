import React from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';

const History = () => {
  const wordData = useSelector(state => state.searchedData);
    console.log(wordData)

  return (
    <div className='history-container'>
      <h2>History</h2>
     {
      wordData.length!==0 && wordData.map((item,idx) => {
        return <NavLink to={`/word/${item.word}`} key={idx}>{item.word}</NavLink>
      })
     
     }
      <div>
   
    </div>
    </div>
  )
}

export default History
