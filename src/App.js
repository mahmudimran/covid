
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Covid from './components/Header/Covid/Covid';

function App() {
  const [virus, setVirus] = useState([])
  useEffect(()=>{
    const url= 'https://coronavirus-19-api.herokuapp.com/countries'
    fetch(url)
    .then(res=>res.json())
    .then(data => setVirus(data))

  },[])

  return (
    <div className="App">
      <Header></Header>
      {/* <h2 className="text-center">Total Country : {virus.length }</h2> */}
      {
        virus.map(corona => <Covid corona={corona}></Covid>)
      }
      
    </div>
  );
}

export default App;
