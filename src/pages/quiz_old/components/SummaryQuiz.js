import React from "react";

const SummaryQuiz = (props) => {
    let finished = null;
    if (props.allparts) {
        finished = (<div><h1>You have finished all the questions! Let's find out the result!</h1><button onClick={props.comparision}>Here we go!</button></div>)
    }
    return (
        <div>
            {finished}
        </div>
    )
}

export default SummaryQuiz;