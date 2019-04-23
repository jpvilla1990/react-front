import React from 'react';
import '../css/styles.css';


class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            active:false,
            keywords:'Hello'
        }
    }



inputChangeHandler1(){
    console.log("I was clicked")
}

inputChangeHandler2=(event)=>{
    //console.log(event.target.value);
    const value = event.target.value === '' ? false:true;
    this.setState({
        active:value,
        keywords:event.target.value
    })
}

    render(){
        console.log(this.state.keywords);

        let backgroundHeader = 'red';

        if(this.state.keywords!==''){
            backgroundHeader='blue';
        }else{
            backgroundHeader='red'
        }
/*const styles = {
    header:{
        background:'#03a9f4'
    },
    logo:{
        color:'#fff',
        fontFamily:'Anton',
        textAlign:'center'
    }
}*/

       /* return (
    <header style={styles.header}>
        <div style={styles.logo}>logo</div>
        <input type="text"/>
    </header>
    )
    }*/

          return (
    <header style={{background:`${this.state.active ? 'blue':'red'}`}}>
        <div className="logo" 
        onClick={this.inputChangeHandler1}>Logo</div>
        <input type="text" onChange={(e) => {this.inputChangeHandler2(e)}}/>
    </header>
    )
    }

}

const user = {
    name:'Juan',
    lastname:'Villa',
    age: 28
}

const getYear = () =>{
    const newDate = new Date();
    return newDate.getFullYear();
}

/*const Header = () =>{
    return <div>The date is {
        getYear()
    }
   
    <div>
        <div>{user.name}</div>
        <div>{user.lastname}</div>
        <div>{user.age}</div>
    </div>
        </div>
}*/

export default Header;