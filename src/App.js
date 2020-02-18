import React, { useState } from "react";
import "./styles.css";
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ops = ["-", "+", "x", "/"];

export default function App() {
  const [block, setBlock] = useState({
    num1: "",
    num2: "",
    switched: false,
    operand: "",
    result: 0
  });

  const _handleAdd = e => {
    let i = block.switched ? "num2" : "num1";
    setBlock({ ...block, [i]: block[i] + JSON.stringify(e) });
  };

  const _handleTotal = () => {
    switch (block.operand) {
      case "-":
        setBlock({
          ...block,
          result: parseInt(block.num1) - parseInt(block.num2)
        });
        break;
      case "+":
        setBlock({
          ...block,
          result: parseInt(block.num1) + parseInt(block.num2)
        });
        break;
      case "x":
        setBlock({
          ...block,
          result: parseInt(block.num1) * parseInt(block.num2)
        });
        break;
      case "/":
        setBlock({
          ...block,
          result: parseInt(block.num1) / parseInt(block.num2)
        });
        break;
      default:
        setBlock({ ...block, result: "Something went wrong" });
        break;
    }
  };
  return (
    <div>
      <h3>{block.num1}</h3>
      <h3>{block.operand}</h3>
      <h3>{block.num2}</h3>
      <h1>Result: {block.result}</h1>
      {nums.map((number, index) => (
        <button onClick={() => _handleAdd(number)}>{index}</button>
      ))}
      <p />
      {ops.map(op => (
        <button
          onClick={() => setBlock({ ...block, switched: true, operand: op })}
        >
          {op}
        </button>
      ))}
      <button onClick={() => _handleTotal()}>=</button>
    </div>
  );
}
