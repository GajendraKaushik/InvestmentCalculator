import {calculateInvestmentResults } from '../util/investment'
import { useState } from "react"
function Calculator_input(){
   const [initial, setInitial]=useState("")
   const [anual, setAnual]=useState("")
   const [expectedreturn, setExpectedreturn]=useState("")
   const [duration, setDuration]=useState("")
   function handleInitialChange(event){
    setInitial(event.target.value)
   }
   function handleAnualChange(event){
    setAnual(event.target.value)
   }
   function handleReturnChange(event){
    setExpectedreturn(event.target.value)
   }
   function handleDurationChange(event){
    setDuration(event.target.value)
   }
   console.log(initial, anual, expectedreturn, duration)
   const calculatedAnnualData  = calculateInvestmentResults({initial, anual, expectedreturn, duration})
//    getValue(calculatedAnnualData)
   console.log(calculatedAnnualData)
    return (
        <div id='user-input'>
            <div className='input-group'>
            <p>
            <label id = "iv">Initial Investment</label>
            <input id ="iv" type="number" onChange={handleInitialChange} value={initial} required/>
            </p>
            <p>
            <label id = "an">Anumal Investment</label>
            <input id ="an" type="number" onChange={handleAnualChange} value={anual} required/>
            </p>
            </div>
            <div className='input-group'>
                <p>
            <label id = "er">Expected Return</label>
            <input id ="er" type="number" onChange={handleReturnChange} value={expectedreturn} required/>
            </p>
            <p>
            <label id = "D">Duration</label>
            <input id ="D" type="number" onChange={handleDurationChange} value={duration} required/>
            </p>
            </div>
        </div>
    )
}

export default Calculator_input ;