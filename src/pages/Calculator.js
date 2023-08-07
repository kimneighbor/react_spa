import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [result, setResult] = useState("0");

    const handleInput = (input) => {
        switch (input) {
            case "C":
                setResult("0");
                break;
            case "+/-":
                setResult((prevResult) => {
                    if (prevResult === "0") return prevResult;
                    return prevResult.charAt(0) === "-"
                        ? prevResult.slice(1)
                        : "-" + prevResult;
                });
                break;
            case "%":
                setResult((prevResult) => String(Number(prevResult) / 100));
                break;
            case "=":
                setResult((prevResult) => {
                    try {
                        return String(eval(prevResult));
                    } catch (error) {
                        console.log(error);
                        return "Error";
                    }
                });
                break;
            default:
                setResult((prevResult) => {
                    if (prevResult === "0" && input === "0") return prevResult;
                    if (prevResult === "0") return input;
                    if (prevResult === "Error") return "0";
                    return prevResult + input;
                });
                break;
        }
    };

    return (
        <div className="calculator">
            <div className="screen">{result}</div>
            <div className="buttons">
                    <button onClick={() => handleInput("C")}>C</button>
                    <button onClick={() => handleInput("+/-")}>+/-</button>
                    <button onClick={() => handleInput("%")}>%</button>
                    <button onClick={() => handleInput("/")}>÷</button>
                    <button onClick={() => handleInput("7")}>7</button>
                    <button onClick={() => handleInput("8")}>8</button>
                    <button onClick={() => handleInput("9")}>9</button>
                    <button onClick={() => handleInput("*")}>×</button>
                    <button onClick={() => handleInput("4")}>4</button>
                    <button onClick={() => handleInput("5")}>5</button>
                    <button onClick={() => handleInput("6")}>6</button>
                    <button onClick={() => handleInput("-")}>-</button>
                    <button onClick={() => handleInput("1")}>1</button>
                    <button onClick={() => handleInput("2")}>2</button>
                    <button onClick={() => handleInput("3")}>3</button>
                    <button onClick={() => handleInput("+")}>+</button>
                    <button onClick={() => handleInput("0")}>0</button>
                    <button onClick={() => handleInput(".")}>.</button>
                    <button onClick={() => handleInput("=")}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
