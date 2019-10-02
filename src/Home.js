import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {"value": null};
    }

    async componentDidMount() {
        let response = await axios.get('/home');
        this.setState({"value": response.data});
    }

    render() {
        return (
            <h1 id='message'>{this.state.value}</h1>
        );
    }

}

export default Home;