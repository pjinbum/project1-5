
import './App.css';
import Reactdom from './Reactdom';
import { useState , useEffect } from 'react';

function App() {



  const [menulist , setMenulist] = useState([1,2,3])

  
  return (
    <div className="App">

      <div style={{backgroundColor :'black' , height :'100px'}}>
        <ul className='menulist'>
          {menulist.map((menufan , index) => {
            return (
              <li key={index}>Menu{menufan}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
