import React, { Component } from 'react'

class ListRenderWithClass extends Component {
    state = {
        ListItem: [
            {
                first_name: 'Waqas',
                last_name: 'Khan'
            },
            {
                first_name: 'Waseem',
                last_name: 'Khan'
            },
            {
                first_name: 'Ali',
                last_name: 'Khan'
            }
        ]
         
    }
   
    render() {
        const l = this.state.ListItem.map(item => <h1> Hello {item.first_name} {item.last_name}</h1 >)
        return (<div>{l}</div>)
    }
}
export default ListRenderWithClass