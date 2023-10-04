import './App.css';
import { useSelector } from 'react-redux';
import DisplayData from './Components/DisplayData';
import { Route,Routes } from 'react-router-dom';
import History from './Components/History'
import Navbar from './Components/Navbar';
import WordDetailsPage from './Components/WordDetailsPage';
function App() {
  const wordData = useSelector(state => state.searchedData);
  return (
    <div className="App">
       <Navbar/>
       <Routes>
  <Route path='/' element={<DisplayData/>}/>
  <Route path = '/history' element={<History/>}/>
 {
    wordData.length!==0 && wordData.map((item,idx) => {
      return <Route path={`/word/${item.word}`} key={idx} element={<WordDetailsPage data={item.details}/>}/>
    })
 }
  </Routes>
  
    </div>
  );
}

export default App;
