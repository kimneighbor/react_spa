import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0);

    const handleClick = (operation) => {
        setNumber(num + operation);
    };

    return (
        <div>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(-1)}>-1</button>
            <p>{num}</p>
        </div>
    );
};


export default Counter;