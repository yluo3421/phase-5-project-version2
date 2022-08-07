import React from 'react';
import "./Blog.css"

function Blog() {
    return (
        <div class="blog-container">
            <header>
                <img src="https://i.imgur.com/AVeu1q1.jpeg" width="220" height="200" alt="headerImg" class="myprofile"></img>
                <h1>Path Finding Algorithms and Visualizations by Yeming Luo</h1>
                
            </header>
            <article>
                <h2>Why Path Finding?</h2>
                <p>
                    Game is one of my hobbies and I always wonder why do they have so many ideas 
                    that can lead people to keep playing and enjoying the game. I have seen vlogs 
                    about making their own game using model but currently all I had is React and rails, 
                    so I decided to start by path-finding. It is the root to whatever games that need a map.
                </p>
                
            </article>
            <article>
                <h2>What Can Path Finding Algorithm Do?</h2>
                <p>
                    The problem we’re trying to solve is to get a game object from the starting
                     point to a goal. Pathfinding addresses the problem of finding a good path 
                     from the starting point to the goal—avoiding obstacles, avoiding enemies, 
                     and minimizing costs (fuel, time, distance, equipment, money, etc.).
                </p>
                
            </article>
            <article>
                <h2>What Algorithm Can We Use?</h2>
                <p>
                    The firs one comes to my mind are Breadth-First Search (BFS). BFS can be used 
                    to find a single source shortest path in an unweighted graph. But yet the drawback 
                    is that in both game and real life paths come with weight (distance etc.).
                    Here comes Dijkstra and A*. In terms of pathfinding, Dijkstra’s algorithm will 
                    want to try out every path and every vertex to find the shortest path between 
                    its starting point and destination, whereas A* has an extra attribute, a heuristic, 
                    that should allow it to find the shortest path without needing to check every path 
                    and vertex. Each algorithm has its use cases, but generally speaking, both Dijkstra’s 
                    and A* can find the shortest path, but A* will do it faster.
                </p>
                
            </article>
        </div>
    )
}

export default Blog;