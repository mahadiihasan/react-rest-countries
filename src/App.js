import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Persons/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* After using component folder */}
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
      
      {/* use like this before making component folder */}
      {/* use like this before making component folder */}

      
    </div>
  );
}

function LoadCountries(){

  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
  },[])

  return(
    <div>
      <h1>Visiting every country of the world!!!!!!!</h1>
      <h3>Avalaibale countries: {countries.length}</h3>
      {
        countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div style={{border:'solid 3px red', margin: '15px', padding:'10px'}}>
      <h4>Name: {props.name}</h4>
      <p>Population: {props.population}</p>
    </div>
  )
}

export default App;
