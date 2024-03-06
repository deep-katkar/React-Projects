import { useEffect, useState } from "react";
import "./App.css";
import { tenureData } from "./utils/constants";
import { numberWithCommas } from "./utils/config";

function App() {
  const [cost, setCost] = useState(0);
  const [intrest, setIntrest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEMI] = useState(0);

  const calculateEMI = (downPayment) => {
    if (!cost) return;

    const loanAmt = cost - downPayment;
    const rateOfIntrest = intrest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfIntrest * (1 + rateOfIntrest) ** numOfYears) /
      ((1 + rateOfIntrest) ** numOfYears - 1);

    return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi) => {
    if (!cost) return;

    const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;

    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEMI(0);
    }

    const emi = calculateEMI(downPayment);
    setEMI(emi);
  }, [tenure]);

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    // Calculate the EMI and Update it
    const emi = calculateEMI(dp);
    setEMI(emi);
  };

  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEMI(emi.toFixed(0));

    // Calculate DownPayment and Update it
    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  return (
    <div className="max-w-screen-md flex flex-col gap-5 px-5 mt-4">
      <span className="text-4xl font-medium">EMI Calculator</span>

      <span className="text-xl font-medium">Total cost of Assets</span>

      <input
        className="bg-gray-500 rounded-md p-2 "
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Total cost of Assets"
      />

      <span className="text-xl font-medium">Intrest Rate (in %)</span>

      <input
        className="bg-gray-500 rounded-md p-2 "
        type="number"
        value={intrest}
        onChange={(e) => setIntrest(e.target.value)}
        placeholder="Total cost of Assets"
      />

      <span className="text-xl font-medium">Prossesing Fee (in %)</span>

      <input
        className="bg-gray-500 rounded-md p-2 "
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
        placeholder="Total cost of Assets"
      />

      <span className="text-xl font-medium">Down Payment</span>
      <span
        className="text-l font-medium"
        style={{ textDecoration: "underline" }}
      >
        {" "}
        Total Down Payment -{" "}
        {numberWithCommas(
          (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
        )}
      </span>
      <div>
        <input
          type="range"
          min={0}
          max={cost}
          className="slider w-full"
          value={downPayment}
          onChange={updateEMI}
        />
        <div className="flex justify-between">
          <label htmlFor="">0%</label>
          <b>{numberWithCommas(downPayment)}</b>
          <label htmlFor="">100%</label>
        </div>
      </div>

      <span className="text-xl font-medium">Loan per month</span>
      <span
        className="text-l font-medium"
        style={{ textDecoration: "underline" }}
      >
        {" "}
        Total Loan Amount - {numberWithCommas((emi * tenure).toFixed(0))}
      </span>
      <div>
        <input
          type="range"
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          className="slider w-full"
          value={emi}
          onChange={updateDownPayment}
        />
        <div className="flex justify-between">
          <label htmlFor="">{numberWithCommas(calculateEMI(cost))}</label>
          <b>{numberWithCommas(emi)}</b>
          <label htmlFor="">{numberWithCommas(calculateEMI(0))}</label>
        </div>
      </div>

      <span className="text-xl font-medium mb-4">Tenure</span>
      <div className="flex justify-around gap-1 mb-5">
        {tenureData.map((item) => (
          <button
            className={`${
              item === tenure
                ? "w-20 px-6 py-2 mx-auto text-blue-600 bg-white rounded-full hover:bg-blue-700 md:mx-0"
                : "w-20 px-6 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
            }`}
            onClick={() => setTenure(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
