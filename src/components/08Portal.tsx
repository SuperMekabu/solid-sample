import {Component} from "solid-js";
import {Portal} from "solid-js/web";

import "./08Portal.css";

export const PortalEg: Component = () => {
    return (
        <div className={"app-container"}>
            <p>サイズが制限されている div の中にあるテキスト</p>
            <p>サイズが制限されている div の中にあるテキスト</p>
            <p>サイズが制限されている div の中にあるテキスト</p>
            <p>サイズが制限されている div の中にあるテキスト</p>
            <p>サイズが制限されている div の中にあるテキスト</p>
            <Portal>
                <div className={"popup"}>
                    <h1>Popup</h1>
                    <p>なにかのときに必要になるかもしれないテキスト</p>
                </div>
            </Portal>
        </div>
    )
}