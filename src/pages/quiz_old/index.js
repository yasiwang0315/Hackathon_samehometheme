import React, { Component } from "react";

import BasicInfo from "./components/BasicInfo";
import KeyQualities from "./components/KeyQualities";
import ProgressBar from "./components/ProgressBar";
import SummaryQuiz from "./components/SummaryQuiz";
import "./Quiz.css";


class Quiz_page extends Component {
    state = {
        progress: 0,
        username: "",
        email: "",
        region: "",
        gender: "",
        height: "",
        color: "",
        style: ""
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
    CallbackHeight = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ height: val1, progress: newprogress });
    }
    CallbackColor = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ color: val1, progress: newprogress });
    }
    CallbackStyle = (val1, val2) => {
        const newprogress = this.state.progress + val2;
        this.setState({ style: val1, progress: newprogress });
    }

    Comparision = () => {

    }


    render() {

        let p = 100 / (Object.keys(this.state).length - 1);
        console.log(this.state.progress);
        if (this.state.progress === 3 * p) {
            console.log("hhhh");
        }
        return (
            <div>
                <BasicInfo
                    progress={p}
                    callbackuser={this.CallbackUser}
                    callbackemail={this.CallbackEmail}
                    callbackregion={this.CallbackRegion} />
                <KeyQualities
                    progress={p}
                    part1={this.state.region}
                    callbackgender={this.CallbackGender}
                    callbackheight={this.CallbackHeight}
                    callbackcolor={this.CallbackColor}
                    callbackstyle={this.CallbackStyle} />
                <div>
                    <ProgressBar progress={this.state.progress} />
                </div>
                <SummaryQuiz
                    allparts={this.state.color}
                    comparision={this.comparison} />
            </div>
        )
    }
}

export default Quiz_page;
