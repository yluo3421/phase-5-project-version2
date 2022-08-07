import React from "react";

import "./Node.css";


function Node({ isStart, isEnd, row, col, isWall }) {
    const classes = isStart ? "node-Start" : isWall ? "isWall" : isEnd ? "node-End" : "";
    return (
        <div className={`node ${classes}`} id={`node-${row}-${col}`}></div>
    )
}

export default Node;