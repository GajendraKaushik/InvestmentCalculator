import Header from "./components/Header"
import Calculator_input from "./components/Calculater_input"
import ResultTable from "./components/ResultTable"
import { useState } from "react"

function App() {
  const [values, setValues] = useState()
  function getValue(data){
        setValues(data)
  }
  return (
    <>
    <Header/>
    <Calculator_input/>
    {/* <ResultTable values={values}/> */}
    </>
  )
}

export default App
