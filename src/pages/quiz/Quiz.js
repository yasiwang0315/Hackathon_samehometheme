import React, { Component } from "react";
import axios from "axios";
import BasicInfo from "../quiz/components/BasicInfo";
import KeyQualities from "../quiz/components/KeyQualities";
import ProgressBar from "../quiz/components/ProgressBar";
import "./Quiz.css";
import SummaryQuiz from "../quiz/components/SummaryQuiz";

class Quiz extends Component {
    state = {
        progress: 0,
        username: "",
        email: "",
        region: "",
        gender: "",
        hair: "",
        eye: "",
        occupation: "",
        apiResponse: "",
        showResults: false,
        ending: false
    }



    CallbackUser = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ username: val1, progress: newprogress });
    }
    CallbackEmail = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ email: val1, progress: newprogress });
    }
    CallbackRegion = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ region: val1, progress: newprogress });
    }

    CallbackGender = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ gender: val1, progress: newprogress });
    }
    CallbackHair = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ hair: val1, progress: newprogress });
    }
    CallbackEye = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ eye: val1, progress: newprogress });
    }
    CallbackOccupation = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ occupation: val1, progress: newprogress, ending: true });
    }

    callAPI() {
        const queryParams = this.state.username + "/" + this.state.email + "/" + this.state.region + "/" + this.state.gender + "/" +
            this.state.hair + "/" + this.state.eye + "/" + this.state.occupation;
        const url = "http://localhost:8080/" + queryParams;
        console.log(url);
        axios.get(url)
            .then(res => {
                this.setState({ apiResponse: res.data, occupation: "" })
                console.log(this.state.apiResponse)
            }
            );
    }

    componentDidUpdate() {
        if (this.state.occupation) {
            this.callAPI();
        }
    }

    showResults = () => {
        this.setState({ showResults: true })
    }


    render() {
        let p = 100 / 7;
        let results = null;
        let notify = this.state.ending ? null : (<p><em>(Press Enter to continue)</em></p>);
        let words = null;
        if (this.state.showResults) {
            words = (<h2 style={{ textAlign: "center" }}>Here are the ideal boyfriends/girlfriends!</h2>);
            results = Object.keys(this.state.apiResponse).map(igKey => {
                return (<div style={{ textAlign: "center", fontWeight: "bold" }}>
                    <p>{this.state.apiResponse[igKey].name}</p>
                </div>)
            })
        }
        return (
            <div className="Quiz">
                {notify}
                <BasicInfo
                    progress={p}
                    callbackuser={this.CallbackUser}
                    callbackemail={this.CallbackEmail}
                    callbackregion={this.CallbackRegion} />
                <KeyQualities
                    progress={p}
                    part1={this.state.region}
                    callbackgender={this.CallbackGender}
                    callbackhair={this.CallbackHair}
                    callbackeye={this.CallbackEye}
                    callbackoccupation={this.CallbackOccupation} />
                <div className="PB">
                    <ProgressBar progress={this.state.progress}
                    />
                </div>
                <SummaryQuiz
                    allparts={this.state.ending}
                    comparision={this.comparison}
                    clicked={this.showResults}
                    showResults={this.state.showResults}
                />
                {words}
                {results}
                {/* <p>{this.state.username}</p>
                <p>{this.state.email}</p>
                <p>{this.state.region}</p> */}
            </div>
        )
    }
}

export default Quiz;