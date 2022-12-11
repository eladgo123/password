import './App.css';
import Pas from './Pas' ; 
import { useState } from 'react';

function App() {
    const[password,setpassword] = useState(1)
    const[btn , setbtn] = useState(true)
    
    function hendelPassword(e){
        //console.log(e)
        setpassword/*(Number*/(e.target.value)/*)*/
    }
   function disableBtn(x){
        setbtn(x)
    }


  return (
    <div className="App">
      <h1>Password App</h1>
      <input type ="string" value={password} onChange={hendelPassword}/> 
      <button disabled={btn}>Submit</button>
      <Pas password={password} disableBtn={disableBtn}/>
    </div>
  );
}
export default App;
