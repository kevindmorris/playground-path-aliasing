import { subtract } from "@/utils/operations";
import React from "react";

export default function Subtract() {
  const [num1, setNum1] = React.useState<number>(1);
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setNum1(newValue);
    } else {
      setNum1(0);
    }
  };
  const [num2, setNum2] = React.useState<number>(1);
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setNum2(newValue);
    } else {
      setNum2(0);
    }
  };

  const diff = React.useMemo(() => subtract(num1, num2), [num1, num2]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <input type="number" step={1} value={num1} onChange={handleChange1} />
      <input type="number" step={1} value={num2} onChange={handleChange2} />
      <p>Difference: {diff}</p>
    </div>
  );
}
