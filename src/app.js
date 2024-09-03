import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppComponent = () => {
    return(
        <div id="innerContainer">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('bodyContainer'));
root.render(<AppComponent/>);