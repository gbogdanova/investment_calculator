import { useState} from "react"

import Resalts from "./Results";
import UserInput from "./UserInput";

export default function Main (){
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  function handleUserInput(inputIdentifier, newValue){
    setUserInput( prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      }
    })
  }
  return (
    <main>
      <UserInput userInput={userInput} onChange={handleUserInput}/>
      <Resalts userInput={userInput}/>
    </main>
  )
}