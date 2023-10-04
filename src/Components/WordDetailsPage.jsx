import React from 'react'

const WordDetailsPage = ({data}) => {
  return (
    <div>
        {
        data && data.map((item,idx) => {
            return(<div key={idx} className='card'>
             <h2>{item.word}</h2>
             <span>{item.phonetic}</span>
             <audio controls>
                <source src={item.phonetics[0]?.audio}/>
             </audio>
             <span>{item.phonetic}</span>
             <audio controls>
                <source src={item.phonetics[1]?.audio}/>
             </audio>
             <span>{item.phonetics[1]?.text}</span>
             <div className='bold'>{item.meanings[0]?.partOfSpeech}</div>
             <p>{item.meanings[0]?.definitions[0]?.definition}</p>
             <p>{item.meanings[0]?.definitions[1]?.definition}</p>
             <p>{item.meanings[0]?.definitions[2]?.definition}</p>
             <p>{item.meanings[0]?.definitions[3]?.definition}</p>
             <p>{item.meanings[0]?.definitions[4]?.definition}</p>
             <div className='bold'>{item.meanings[1]?.partOfSpeech}</div>
             <p>{item.meanings[1]?.definitions[0]?.definition}</p>
            </div>)
        })
        }
    </div>
  )
}

export default WordDetailsPage
