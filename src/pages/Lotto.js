import React, { useState } from "react";
import "./Lotto.css";

const Lotto = () => {
    const [numbers, setNumbers] = useState([]);

    const generateNumbers = () => {
        const randomNumbers = [];
        while (randomNumbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            if (randomNumbers.indexOf(randomNumber) === -1) {
                randomNumbers.push(randomNumber);
            }
        }
        setNumbers(randomNumbers.sort((a, b) => a - b));
    };

    const getColor = (number) => {
        if (number >= 1 && number <= 9) {
            return "#f44336"; // 빨간색
        } else if (number >= 10 && number <= 19) {
            return "#2196f3"; // 파란색
        } else if (number >= 20 && number <= 29) {
            return "#4caf50"; // 초록색
        } else if (number >= 30 && number <= 39) {
            return "#ffc107"; // 노란색
        } else {
            return "#9c27b0"; // 보라색
        }
    };

    return (
        <div className="lottery">
            <h1>Lotto Numbers</h1>
            <button onClick={generateNumbers}>Luck</button>
            <ul>
                {numbers.map((number) => (
                    <li key={number} style={{ backgroundColor: getColor(number) }}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lotto;
