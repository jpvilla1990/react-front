import React from 'react';

const user = {
    name:'Juan',
    lastname:'Villa',
    age: 28
}

const getYear = () =>{
    const newDate = new Date();
    return newDate.getFullYear();
}

const Header = () =>{
    return <div>The date is {
        getYear()
    }
    <div>
        <div>{user.name}</div>
        <div>{user.lastname}</div>
        <div>{user.age}</div>
    </div>
        </div>
}

export default Header;