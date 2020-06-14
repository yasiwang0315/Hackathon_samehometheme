import React, { Component, Fragment } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';

class BasicInfo extends Component {
    state = {
        gender: false,
        height: false,
        color: false,
        style: false
    }

    Addgender = (type) => {
        if (type.key === "Enter") {
            this.setState({ gender: true });
            this.props.callbackgender(type.target.value, this.props.progress);
        }
    }


    Addheight = (type) => {
        if (type.key === "Enter") {
            this.setState({ height: true });
            this.props.callbackheight(type.target.value, this.props.progress);
        }
    }
    Addstyle = (type) => {
        if (type.key === "Enter") {
            this.setState({ style: true });
            this.props.callbackstyle(type.target.value, this.props.progress);
        }
    }
    Addcolor = (type) => {
        if (type.key === "Enter") {
            this.setState({ color: true });
            this.props.callbackcolor(type.target.value, this.props.progress);
        }
    }

    render() {
        let gender = null;
        if (this.props.part1 && !this.state.gender) {
            gender = (
                <Fragment>
                    <div style={{ marginBottom: "10px" }}>What is your gender?</div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Female"
                            aria-label="Female"
                            aria-describedby="basic-addon1"
                            onKeyDown={(type) => this.Addgender(type)}
                        />
                    </InputGroup>
                </Fragment>);
        }
        let height = null;
        if (this.state.gender && !this.state.height) {
            height = (
                <Fragment>
                    <div style={{ marginBottom: "10px" }}>What is your height?</div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Height"
                            aria-label="Height"
                            aria-describedby="basic-addon2"
                            onKeyDown={(type) => this.Addheight(type)}
                        />
                    </InputGroup>
                </Fragment>);
        }
        let style = null;
        if (this.state.height && !this.state.style) {
            style = (
                <Fragment>
                    <div style={{ marginBottom: "10px" }}>What is your style?</div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Romantic"
                            aria-label="Blue"
                            aria-describedby="basic-addon3"
                            onKeyDown={(type) => this.Addstyle(type)}
                        />
                    </InputGroup>
                </Fragment>)
        }
        let color = null;
        if (this.state.style && !this.state.color) {
            color = (
                <Fragment>
                    <div style={{ marginBottom: "10px" }}>What is your favourite color?</div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Blue"
                            aria-label="Blue"
                            aria-describedby="basic-addon3"
                            onKeyDown={(type) => this.Addcolor(type)}
                        />
                    </InputGroup>
                </Fragment>)
        }
        return (
            <div>
                {gender}
                {height}
                {style}
                {color}
            </div>
        )
    }
}



export default BasicInfo;
