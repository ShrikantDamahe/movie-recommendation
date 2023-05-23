import { useState } from 'react';
import './App.css';
import Search from './components/Box';
import Results from './components/Results';
import axios from 'axios';
function App() {
  const [state, setState]= useState({
    s: "",
    results:[],
    selected:{}

  });
  
const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=96d09456";
  const search = (e) =>{
    if (e.key === "Enter"){
      axios(apiurl + "&s=" + state.s).then(( data ) =>{
        let results = data.search;
        setState(prevState => {
          return {...prevState, results: results}
        })


        
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState =>{
      return {...prevState, s: s}
    });
    console.log(state.s)


  }
  return (
    <div className='App'>
        <h1>Movies</h1>
      <Search handleInput={handleInput} search={search}/>
      <Results results={state.results}/>
    </div>
  );
}

export default App;
