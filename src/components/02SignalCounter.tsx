import {Component, createEffect, createSignal} from "solid-js";

export const SignalEg: Component = () => {
    const [count, setCount] = createSignal(0);

    createEffect(() => console.log(`Count: ${count()}`));

    const countUp = () => {
        setCount(prev => prev + 1);
    }

    const doubleCount = () => count() * 2;

    return (
        <div>
            <p>{`Count: ${count()} -- DoubleCount: ${doubleCount()}`}</p>
            <button onClick={countUp}>Count up</button>
        </div>
    )
}