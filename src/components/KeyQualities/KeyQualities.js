import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from "react-bootstrap/FormControl";
import Form from 'react-bootstrap/Form'
class BasicInfo extends Component {
    state = {
        gender: false,
        hair: false,
        occupation: false,
        eye: false
    }

    Addgender = (type) => {
        if (type.key == "Enter") {
            this.setState({ gender: true });
            this.props.callbackgender(type.target.value, this.props.progress);
        }
    }


    Addhair = (type) => {
        if (type.key == "Enter") {
            this.setState({ hair: true });
            this.props.callbackhair(type.target.value, this.props.progress);
        }
    }
    Addeye = (type) => {
        if (type.key == "Enter") {
            this.setState({ eye: true });
            this.props.callbackeye(type.target.value, this.props.progress);
        }
    }
    Addoccupation = (type) => {
        if (type.key == "Enter") {
            this.setState({ occupation: true });
            this.props.callbackoccupation(type.target.value, this.props.progress);
        }
    }

    render() {
        let gender = null;
        if (this.props.part1 && !this.state.gender) {
            gender = (
                <React.Fragment>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Female"
                            aria-label="Female"
                            aria-describedby="basic-addon1"
                            onKeyDown={(type) => this.Addgender(type)}
                        />
                    </InputGroup>
                </React.Fragment>);
        }
        let hair = null;
        if (this.state.gender && !this.state.hair) {
            hair = (
                <React.Fragment>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Hair Color</Form.Label>
                            <Form.Control as="select" onKeyDown={(type) => this.Addhair(type)}>
                                <option>Blue</option>
                                <option>Yellow</option>
                                <option>Red</option>
                                <option>Black</option>
                                <option>Green</option>
                                <option>Others</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </React.Fragment>);
        }
        let eye = null;
        if (this.state.hair && !this.state.eye) {
            eye = (
                <React.Fragment>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Eye Color</Form.Label>
                            <Form.Control as="select" onKeyDown={(type) => this.Addeye(type)}>
                                <option>Blue</option>
                                <option>Yellow</option>
                                <option>Red</option>
                                <option>Black</option>
                                <option>Green</option>
                                <option>Others</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </React.Fragment>)
        }
        let occupation = null;
        if (this.state.eye && !this.state.occupation) {
            occupation = (
                <React.Fragment>
                    <div eye={{ marginBottom: "10px" }}>Occupation</div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Blue"
                            aria-label="Blue"
                            aria-describedby="basic-addon3"
                            onKeyDown={(type) => this.Addoccupation(type)}
                        />
                    </InputGroup>
                </React.Fragment>)
        }
        return (
            <div>
                {gender}
                {hair}
                {eye}
                {occupation}
            </div>
        )
    }
}



export default BasicInfo;