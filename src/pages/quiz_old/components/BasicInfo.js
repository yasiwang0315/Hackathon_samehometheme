import React, { Component } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';

class BasicInfo extends Component {
    state = {
        username: false,
        email: false,
        region: false
    }

    Addusername = (type) => {
        if (type.key === "Enter") {
            this.setState({ username: true });
            this.props.callbackuser(type.target.value, this.props.progress);
        }
    }


    Addemail = (type) => {
        if (type.key === "Enter") {
            this.setState({ email: true });
            this.props.callbackemail(type.target.value, this.props.progress);
        }
    }
    Addregion = (type) => {
        if (type.key === "Enter") {
            this.setState({ region: true });
            this.props.callbackregion(type.target.value, this.props.progress);
        }
    }

    render() {
        console.log(this.props.progress);
        let user = null;
        if (!this.state.username) {
            user = (<InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onKeyDown={(type) => this.Addusername(type)}
                />
            </InputGroup>)
        }
        let email = null;
        if (this.state.username && !this.state.email) {
            email = (<InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                    onKeyDown={(type) => this.Addemail(type)}
                /></InputGroup>);
        }
        let region = null;
        if (this.state.email && !this.state.region) {
            region = (<InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">Region</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Region"
                    aria-label="Region"
                    aria-describedby="basic-addon3"
                    onKeyDown={(type) => this.Addregion(type)}
                />

            </InputGroup>)
        }
        return (
            <div>
                {user}
                {email}
                {region}
            </div>
        )
    }
}



export default BasicInfo;
