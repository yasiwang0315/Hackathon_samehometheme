import React from "react";
import Button from 'react-bootstrap/Button'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SummaryQuiz = (props) => {
    let finished = null;
    if (props.allparts && !props.showResults) {
        finished = (
            <div>
                <h1>You have finished all the questions! Let's find out the result!</h1>
                <Button variant="dark" onClick={props.clicked}>Here we go!</Button>
                {/* <button onClick={props.clicked}>Here we go!</button> */}
            </div>)
    }
    return (
        <div>
            {finished}
        </div>
    )
}

export default SummaryQuiz;