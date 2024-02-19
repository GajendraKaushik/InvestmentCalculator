import Header from "./components/Header"
import Calculator_input from "./components/Calculater_input"
import ResultTable from "./components/ResultTable"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 10,
    duration: 10,
  });
 const inputIsValid = userInput.duration >= 1
function handelChange(initialIdentifiyer, newValue) {
  setUserInput((prevUserInput) => {
    return {
      ...userInput,
      [initialIdentifiyer]: +newValue,
    };
  });
}

  return (
    <>
    <Header/>
    <Calculator_input userInput={userInput} onchange={handelChange}/>
    {! inputIsValid && <p className="center">Please enter a duration greater then 0</p>}
    {inputIsValid &&  <ResultTable input={userInput}/>}
    </>
  )
}

export default App
