import { calculateInvestmentResults } from "../util/investment";
import { useState } from "react";
function Calculator_input({userInput, onchange}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
                onchange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label id="an">Anumal Investment</label>
          <input
            id="an"
            type="number"
            onChange={(event) =>
                onchange("annualInvestment", event.target.value)
              }
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="er">Expected Return</label>
          <input
            id="er"
            type="number"
            onChange={(event) =>
                onchange("expectedReturn", event.target.value)
              }
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label id="D">Duration</label>
          <input
            id="D"
            type="number"
            onChange={(event) =>
                onchange("duration", event.target.value)
              }
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </div>
  );
}

export default Calculator_input;
