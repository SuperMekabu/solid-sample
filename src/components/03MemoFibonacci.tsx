import {Component, createMemo, createSignal} from "solid-js";

const fibonacci = (n: number): number => {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export const MemoEg: Component = () => {

    const [count, setCount] = createSignal(0);

    const memoFib = createMemo(() => {
        console.log("Memo")
        return fibonacci(count());
    });

    const increment = () => setCount(prev => prev + 1);
    const clear = () => setCount(0);

    return (
        <div>
            <p>{`Count: ${count()}`}</p>
            <div>1. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>2. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>3. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>4. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>5. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>6. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>7. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>8. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>9. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <div>10. {memoFib()} {memoFib()} {memoFib()} {memoFib()} {memoFib()}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}