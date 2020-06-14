import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const progressbar = (props) => {
    return (
        <div>
            <ProgressBar animated now={props.progress} />
        </div>
    )
}

export default progressbar;
