// Search.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { wordFn } from '../app/wordSlice';
const Search = ({setLoading}) => {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();

function handleSearch(word){
  setLoading(true)
  dispatch(wordFn(word))
  
}
  return (
    <div className='search-box'>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={() => handleSearch(word)}>Search</button>
    </div>
  );
};

export default Search;
