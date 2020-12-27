import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {name:  'Ross',
                backgroundColor: 'yellow'},
                {name:  'Rachel',
                backgroundColor: 'red'},
                {name:  'Monica',
                backgroundColor: 'blue'},
                {name:  'Joey',
                backgroundColor: 'green'},
                {name:  'Phoebe',
                backgroundColor: 'purple'},
                {name:  'Chandler',
                backgroundColor: 'orange'}
            ]
        }
    }
    render() {
        return (
            <div>
                <h1 id = "who">WHO'S WATCHING?</h1>
                <div id = "user-container">
                    {this.state.users.map(u => 
                        <Link to = '/catalog'><div key = {u.name} className = 'user' style = {{backgroundColor: u.backgroundColor}}>
                            <h2 class = "user-name">{u.name}</h2>
                        </div></Link>
                     )}
                </div>
            </div>
        )
    }
}

export default Landing;