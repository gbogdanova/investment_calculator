import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Resalts({userInput}){
  const calc = calculateInvestmentResults(userInput); 
  const initialInvestment = calc[0].valueEndOfYear - calc[0].interest- calc[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investmen Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calc.map((data) => {
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          const totalInvested = data.valueEndOfYear - totalInterest;
          return <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvested)}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}