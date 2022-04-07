import {Component, createSignal, For, Index} from "solid-js";

export const ForEach: Component = () => {
    const [cats, setCats] = createSignal([
        {id: 'J---aiyznGQ', name: 'Keyboard Cat'},
        {id: 'z_AbfPXTKms', name: 'Maru'},
        {id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat'}
    ]);

    return (
        <div>
            <ol>
                <For each={cats()}>
                    {(cat, i) =>
                        <li>{`${i()}, ${cat.id}, ${cat.name}`}</li>
                    }
                </For>
            </ol>
            <ul>
                <Index each={cats()}>
                    {(cat, i) =>
                        <li>{`${i}, ${cat().id}, ${cat().name}`}</li>
                    }
                </Index>
            </ul>
        </div>
    )
}