import {Component, createSignal, Show} from "solid-js";

export const ShowEg: Component = () => {
    const [loggedIn, setLoggedIn] = createSignal(false);
    const toggle = () => setLoggedIn(prev => !prev);

    return (
        <div>
            <Show
                when={loggedIn()}
                fallback={() => <button onClick={toggle}>Log in</button>}
            >
                <button onClick={toggle}>Log out</button>
            </Show>
        </div>
    )
}