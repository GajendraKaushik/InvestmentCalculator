function ResultTable({values}){
    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>year</td>
                    <td>interest</td>
                    <td>valueEndOfYear</td>
                    <td>annualInvestment</td>
                </tr>
            </thead>
            <tbody>
            {values && values.map((value)=>{
                return <tr>
                    <td>{value.year}</td>
                    <td>{value.interest}</td>
                    <td>{value.valueEndOfYear}</td>
                    <td>{value.annualInvestment}</td>
                </tr>
            })}
            </tbody>
        </table>
        </>
    )
}
export default ResultTable ;