import React, { useState } from "react";

// Custom Components
const Card = ({ children, className }) => {
  return <div className={`bg-gray-800 p-6 shadow-lg rounded-lg ${className}`}>{children}</div>;
};

const CardContent = ({ children }) => {
  return <div className="p-4 bg-gray-100 rounded-lg">{children}</div>;
};

const Slider = ({ value, onChange, min, max, step, label }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-100 font-medium">{label}</label>
      <input
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
      <div className="flex justify-between text-white">
        <span>{min}</span>
        <span>{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2 mt-4 rounded-lg text-white ${className}`}
    >
      {children}
    </button>
  );
};

function QuarterlyInterest() {
  // Separate state for SIP and Lumpsum calculations
  const [sipAmount, setSipAmount] = useState(10000); // SIP Quarterly Amount
  const [lumpsumAmount, setLumpsumAmount] = useState(5000); // Lumpsum Initial Amount
  
  // Separate interest rates for SIP and Lumpsum
  const [sipRate, setSipRate] = useState(5); // SIP Interest Rate (quarterly)
  const [lumpsumRate, setLumpsumRate] = useState(5); // Lumpsum Interest Rate (quarterly)
  
  // Separate time periods for SIP and Lumpsum
  const [sipTime, setSipTime] = useState(5); // SIP Time (Years)
  const [lumpsumTime, setLumpsumTime] = useState(5); // Lumpsum Time (Years)
  
  const [resultSIP, setResultSIP] = useState(null);
  const [resultLumpsum, setResultLumpsum] = useState(null);

  const calculateSIP = () => {
    const r = sipRate / 100;
    const quarterlyRate = r / 4; // Divide by 4 for quarterly
    const quarters = sipTime * 4; // Multiply by 4 to get the total number of quarters
    const futureValueSIP = sipAmount * ((Math.pow(1 + quarterlyRate, quarters) - 1) / quarterlyRate) * (1 + quarterlyRate);
    setResultSIP(futureValueSIP.toFixed(2));
  };

  const calculateLumpsum = () => {
    const r = lumpsumRate / 100;
    const futureValueLumpsum = lumpsumAmount * Math.pow(1 + r / 4, lumpsumTime * 4); // Divide by 4 for quarterly interest
    setResultLumpsum(futureValueLumpsum.toFixed(2));
  };

  return (
    <div className="p-6 max-w-full mx-auto flex justify-between">
      {/* SIP Calculator */}
      <div className="w-1/2 mr-4">
        <Card className="p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">SIP Calculator</h2>

          <Slider
            value={sipAmount}
            onChange={(e) => setSipAmount(Number(e.target.value))}
            min={1000}
            max={50000}
            step={500}
            label="Amount Added Each Quarter (₹)"
          />

          <Slider
            value={sipRate}
            onChange={(e) => setSipRate(Number(e.target.value))}
            min={1}
            max={20}
            step={0.1}
            label="Quarterly Interest Rate (%)"
          />

          <Slider
            value={sipTime}
            onChange={(e) => setSipTime(Number(e.target.value))}
            min={1}
            max={30}
            step={1}
            label="Number of Years"
          />

          <Button onClick={calculateSIP} className="bg-blue-500 hover:bg-blue-700 mb-4">Calculate</Button>

          {/* Results Display */}
          {resultSIP && (
            <CardContent className="mt-4">
              <p className="text-lg font-semibold">SIP Future Value: ₹{resultSIP}</p>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Lumpsum Calculator */}
      <div className="w-1/2 ml-4">
        <Card className="p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Lumpsum Calculator</h2>

          <Slider
            value={lumpsumAmount}
            onChange={(e) => setLumpsumAmount(Number(e.target.value))}
            min={5000}
            max={100000}
            step={1000}
            label="Initial Amount (₹)"
          />

          <Slider
            value={lumpsumRate}
            onChange={(e) => setLumpsumRate(Number(e.target.value))}
            min={1}
            max={20}
            step={0.1}
            label="Quarterly Interest Rate (%)"
          />

          <Slider
            value={lumpsumTime}
            onChange={(e) => setLumpsumTime(Number(e.target.value))}
            min={1}
            max={30}
            step={1}
            label="Number of Years"
          />

          <Button onClick={calculateLumpsum} className="bg-blue-500 hover:bg-blue-700 mb-4">Calculate</Button>

          {/* Results Display */}
          {resultLumpsum && (
            <CardContent className="mt-4">
              <p className="text-lg font-semibold">Lumpsum Future Value: ₹{resultLumpsum}</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}

export default QuarterlyInterest;
