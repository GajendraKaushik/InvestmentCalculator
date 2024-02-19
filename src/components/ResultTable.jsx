import {calculateInvestmentResults, formatter} from '../util/investment.js'

function ResultTable({input}){

    const resultData = calculateInvestmentResults(input)
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest -resultData[0].annualInvestment ;

    return(
        <>
        <table id='result'>
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest (Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>

                </tr>
            </thead>
            <tbody>
            {resultData && resultData.map((yearData)=>{
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment ;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest ;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
            </tbody>
        </table>
        </>
    )
}
export default ResultTable ;