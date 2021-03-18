import React,{ useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [value, setvalue] = useState('');
  const [result, setresult] = useState([]);
  
  const fetchImage = () => {
      fetch(`https://api.unsplash.com/search/photos/?client_id=tf9zQ1HvmFUdBnjvuDG40slDpveE_EbeZFopwzPDrcs&query=${value}&orientation=squarish`).then(
        res=> res.json()).then(data => {       
          setresult(data.results)
          
        })
  }

  return (
    <div className="App">
        <div className="container search">
            <input 
              type="text" 
              placeholder="Search Photo" 
              value={value} 
              className="searchbar"
              onChange={(e) => setvalue(e.target.value)}/>
            <button className="search_button" onClick={fetchImage}>Search</button>
        </div>
        <div className="images">
          {   
               
            result.map((res)=>
              <img className="item" src={res.urls.regular} key={res.id} />)
          }    
        </div>    
    </div>
  );
}

export default App;