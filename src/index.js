import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {

state={
    news:JSON
}

    render(){
    return <div>
        <Header/>
        <NewsList news={this.state.news}/>
    </div>;
    //return React.createElement('h1',{className:'title'},React.createElement('div',{className:'title'},'Hello World'));
}
}
/*

const App2 = () => {
    return(
    <div className="newElement">
        <h1>Hello World 2</h1>
    </div>
    )
}*/

ReactDOM.render(<App/>,document.querySelector("#root"));
//ReactDOM.render(<App2/>,document.querySelector("#root"));

