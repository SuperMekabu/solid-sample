import {createSignal, Match, Switch} from "solid-js";

export const SwitchEg = () => {
    const [now, setNow] = createSignal(new Date().getSeconds());

    setInterval(() => setNow(new Date().getSeconds()), 1000);

    return (
        <Switch fallback={<p>{now()} is {now()}</p>}>
            <Match when={now() % 15 === 0}>
                <p>{now()} is FizzBuzz</p>
            </Match>
            <Match when={now() % 5 === 0}>
                <p>{now()} is Buzz</p>
            </Match>
            <Match when={now() % 3 === 0}>
                <p>{now()} is Fizz</p>
            </Match>
        </Switch>
    )
}