import React, { Component } from "react";

function ListRender() {
    const listitems = ['Waqas Khan', 'Waseem Khan', 'Ali Khan']
    const item = listitems.map(item => <h1>Hello {item}</h1>)
    return (
        <div>{item}</div>
        );
    
}

export default ListRender;