import {useState} from 'react';
import Colors from './Colors';

export default function MemoDemo() {
    const [count, setCount] = useState(0);
    const [colors, setColors] = useState(["Red", "Green", "Blue"]);

    const increment = function () {
        setCount(curCount => curCount + 1);
    };

    return (
        <>
            <Colors colorNames = {colors} />
            <hr />
            <div>
                Current Count = {count} 
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
}