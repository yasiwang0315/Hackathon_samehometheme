import NewAPI from "./NewAPI/NewAPI";
import React, { Component } from "react";

class Trial extends Component {

    componentDidMount() {
        this.getCharacters();
    }

    getCharacters = () => {
        NewAPI.getCharacters().then(res => {
            console.log(res.data);
            console.log(res.data.data);
        }).catch(err => console.log(err));
    }

    render() {
        return <h1>Hello</h1>
    }
}

export default Trial;