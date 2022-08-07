import React, { useState, useEffect } from "react";

import Node from "./Node";
import "./PathFinding.css";
import Astar from "./Astar";

import Button from "react-bootstrap/Button";

function PathFinding() {
    const [Grid, setGrid] = useState([])
    const [Path, setPath] = useState([])
    const [VisitedNodes, setVisitedNodes] = useState([])

    // number of cols and rows to set up grid
    const cols = 40;
    const rows = 20;

    const NODE_START_ROW = 0;
    const NODE_START_COL = 0;
    const NODE_END_ROW = rows - 1;
    const NODE_END_COL = cols - 1;

    useEffect(() => {
        initializeGrid();
    }, []);

    const initializeGrid = () => {
        const grid = new Array(cols)
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(cols);
        }
        createSpot(grid)
        setGrid(grid)
        addNeighbors(grid)
        const startNode = grid[NODE_START_ROW][NODE_START_COL];
        const endNode = grid[NODE_END_ROW][NODE_END_COL];
        startNode.isWall = false
        endNode.isWall = false

        // this path contains path, visitedNodes, error        
        let path = Astar(startNode, endNode)
        setPath(path.path)
        setVisitedNodes(path.visitedNodes)
    }
    const createSpot = (grid) => {
        for (let i = 0; i < rows; i ++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Spot(i, j)
            }
        }
    }

    // neighbors finder
    const addNeighbors = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j].addneighbors(grid)
            }
        }
    }


    // spot constructor
    function Spot(i, j) {
        this.x = i // row
        this.y = j // col
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.g = 0
        this.f = 0
        this.h = 0
        this.neighbors = [];
        this.isWall = false;
        if (Math.random(1) < 0.2)
        {
            this.isWall = true
        }
        this.previous = undefined;
        this.addneighbors = function(grid) {
            let i = this.x;
            let j = this.y;
            if (i > 0) { this.neighbors.push(grid[i - 1][j]) }
            if (i < rows - 1) { this.neighbors.push(grid[i + 1][j]) }
            if (j > 0) { this.neighbors.push(grid[i][j - 1]) }
            if (j < cols - 1)  {this.neighbors.push(grid[i][j + 1]) }
        }
    }

    // create grid with node
    //console.log(Grid)
    const gridWithNode = (
        <div>
            {Grid.map((row, rowIdx) => {
                return (
                    <div key={rowIdx} className="rowWrapper">
                        {row.map((col, colIdx) => {
                            const { isStart, isEnd, isWall } = col;
                            return <Node 
                                    key={colIdx} 
                                    isStart={isStart} 
                                    isEnd={isEnd} 
                                    row={rowIdx} 
                                    col={colIdx}
                                    isWall={isWall}
                                    />
                        })}
                    </div>
                )
            })}
        </div>
    )
    const visualizeShortestPath = (shortestPathNodes) => {
        for (let i = 0; i < shortestPathNodes.length; i++) {
            setTimeout(() => {
                const node = shortestPathNodes[i]
                document.getElementById(`node-${node.x}-${node.y}`).className = "node node-shortest-path"
            }, 10 * i)
        }
    }

    const visualizePath = () => {
        //console.log("visualize")
        for (let i = 0; i <= VisitedNodes.length; i++) {
            if (i === VisitedNodes.length) {
                setTimeout(() => {
                    visualizeShortestPath(Path)
                }, 20 * i)
            }
            else {
                setTimeout(() => {
                    const node = VisitedNodes[i]
                    document.getElementById(`node-${node.x}-${node.y}`).className = "node node-visited"
                }, 20 * i)
                
            }
            
        }
    }
    //the component return
    console.log(Path)
    return (
        <div className="wrapper"> 
            <Button onClick={visualizePath} variant="success"> A* AlgorithmVisualizer</Button>
            <h1>A* PathFinding Algorithm Visualizer </h1>
            {gridWithNode}
        </div>

    );
}

export default PathFinding;