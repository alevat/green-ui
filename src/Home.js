import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {"value": null};
    }

    async componentDidMount() {
        let response = await axios.get(this.getServiceUrl());
        console.log(response)
        this.setState({"value": response.data});
    }

    render() {
        return (
            <h1 id='message'>{this.state.value}</h1>
        );
    }

    getServiceUrl() {
        let baseUrl = "/";
        if (window.GREEN_UI_CONFIGURATION) {
            baseUrl = "https://green-service-" + window.GREEN_UI_CONFIGURATION.apiNamespace + "/";
        }
        return baseUrl + "home";
    }

}

export default Home;