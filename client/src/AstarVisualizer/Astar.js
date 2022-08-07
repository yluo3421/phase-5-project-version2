function Astar(startNode, endNode)
{
    let openSet = []
    let closedSet = []
    let path = []
    //let counter = 0
    let visitedNodes = []

    openSet.push(startNode)
    while(openSet.length > 0) {
        let leastIndex = 0
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[leastIndex].f) {
                leastIndex = i;
            }
        }

        // counter += 1
        // console.log(counter)

        let current = openSet[leastIndex];
        visitedNodes.push(current)
        if (current === endNode) {
            let temp = current
            path.push(temp)
            while (temp.previous) {
                path.push(temp.previous)
                temp = temp.previous
            }
            //console.log(path)
            
            //console.log("Done! Path Found")
            return { path, visitedNodes }
        }

        openSet = openSet.filter((element) => element !== current);
        closedSet.push(current)

        let neighbors = current.neighbors
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i]
            if (!closedSet.includes(neighbor) && !neighbor.isWall){
                let tempG = current.g + 1
                let newPath = false
                if (openSet.includes(neighbor)) {
                    if(tempG < neighbor.g) {
                        neighbor.g = tempG
                        newPath = true;
                    }
                }
                else {
                    neighbor.g = tempG
                    newPath = true
                    openSet.push(neighbor)
                }

                if (newPath) {
                    neighbor.h = heruistic(neighbor, endNode)
                    neighbor.f = neighbor.g + neighbor.h
                    neighbor.previous = current;
                }

            }
        }
    }    
    return {path, visitedNodes, error: "No Path Found!"}
}

function heruistic(a, b) {
    let d = Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
    return d
}

export default Astar;