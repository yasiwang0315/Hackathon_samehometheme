import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
const progressbar = (props) => {
    return (
        <div>
            <ProgressBar animated now={props.progress} />
        </div>
    )
}

export default progressbar;
