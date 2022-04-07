import type {Component} from 'solid-js';
import styles from './App.module.css';

import {SimpleChild} from "./components/01SimpleChild";
import {SignalEg} from "./components/02SignalCounter";
import {MemoEg} from "./components/03MemoFibonacci";
import {ShowEg} from "./components/05Show";
import {ForEach} from "./components/04ForEach";
import {SwitchEg} from "./components/06Switch";
import {DynamicEg} from "./components/07Dynamic";
import {PortalEg} from "./components/08Portal";

const App: Component = () => {
    return (
        <div class={styles.App}>
            <h1>This is a Header</h1>
            <SimpleChild/>
            <SignalEg/>
            <MemoEg/>
            <ShowEg/>
            <ForEach/>
            <SwitchEg/>
            <DynamicEg/>
            <PortalEg/>
        </div>
    );
};

export default App;
