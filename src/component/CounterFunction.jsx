import React, { useRef, useEffect } from "react";


function CounterFunction() {
    const [counter, setCounter] = React.useState({
        count: 0
    });

    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = counter.count;
    });

    const incrementCount = () => {
        debugger;
        //const prevCount = usePrevious(counter.count);
        let prevCount = prevCountRef.current;
        setCounter({ count: prevCount++ });
    };

    const decrementCount = () => {
        debugger;
        //const prevCount = usePrevious(counter.count);
        let prevCount = prevCountRef.current;
        setCounter({ count: prevCount = prevCount - 1 });
    };

    const resetCount = () => {
        debugger;
        setCounter({ count: 0 });
    };

    return <div>
        <div className="clicker">
            <div>Counter: {counter.count}</div>
            <div className="startClicker">
                <button onClick={incrementCount} className="btn btn-success">
                    Add Counter
        </button>
                <button onClick={resetCount} className="btn btn-danger">
                    Reset Counter
        </button>
                <button onClick={decrementCount} className="btn btn-success">
                    Reduce Counter
        </button>
            </div>
        </div>
    </div>;

}


// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current = value;
//     });
//     return ref.current;
// }

export default CounterFunction;