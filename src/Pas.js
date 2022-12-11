import { useState , useEffect } from 'react';

function Pas(props) {
    const {password , disableBtn } = props
    const[strength , setstrength ] = useState("WEAK")
    
    useEffect(()=>{
      console.log(password.length)
      if(password.length > 2 && password.length < 7){
        setstrength("Medium")
        disableBtn(false)
      }
      else if (password.length > 6) {
          setstrength("Big")
          disableBtn(false)
      } else {
        setstrength("WEAK")
        disableBtn(true)
      }
    },[password,disableBtn])
    

     return (
       <div >
         <h1>The password is {strength}</h1>
       </div>
     );
   }

export default Pas;