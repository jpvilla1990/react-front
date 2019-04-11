import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

const App = () => {
    return <div>
        <Header/>
    </div>;
    //return React.createElement('h1',{className:'title'},React.createElement('div',{className:'title'},'Hello World'));
}/*
const App2 = () => {
    return(
    <div className="newElement">
        <h1>Hello World 2</h1>
    </div>
    )
}*/

ReactDOM.render(<App/>,document.querySelector("#root"));
//ReactDOM.render(<App2/>,document.querySelector("#root"));

