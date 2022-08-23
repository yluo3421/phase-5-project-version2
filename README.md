# Awesome README [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)]
This website is created becuase I want more people to know algorithm might look difficult but they could be beautiful when visualized. During my study on sorting and path-finding algorithm, I always find graph and visualization gif helps a lot for me to comprehend them. At the beginning of my bootcamp Flatiron, I saw Clement Mihailescu did a website of visualization, this trigers me that whenever I am ready for a complicate website I will do this one. Last phase is the time.
 
This website delivered below features <br />
Dijkstra's Algorithm (weighted): the father of pathfinding algorithms; guarantees the shortest path <br />
Astar Search* (weighted): arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm <br />
Wall system, inside Dijkstra's page, I enable the custom wall feature that you can use mouse to create wall by your self. <br />
Random maze, inside Astar page, I enable random maze so you could see how Astar looks for target in a more efficient way. <br />
[![webpage_gif_001](pictures/Phase%205%20project%20demo%20Path-finding%20Algorithm%20Visualizer%20Shorter%20Version-%2011%20August%202022.gif)]

Snapshot of my website
[![webpage_pic_001](pictures/Pathfinding%20Algorithm%20Website%20220811-001.png)]
[![webpage_pic_003](pictures/Pathfinding%20Algorithm%20Website%20220811-003.png)]
[![webpage_pic_004](pictures/Pathfinding%20Algorithm%20Website%20220811-004.png)]
[![webpage_pic_005](pictures/Pathfinding%20Algorithm%20Website%20220811-005.png)]
[![webpage_pic_006](pictures/Pathfinding%20Algorithm%20Website%20220811-006.png)]

#How to use this at your local VS

To run the website locally  <br />
You need to fork to your local file. <br />
To set up the application, run these commands:

```console
$ bundle install
$ bundle exec rake db:migrate db:seed
```

You can run the app and explore your API in the browser by rails.

```console
$ rails s
```
In a new terminal and run below commands inside directory for frontend. <br />
```console
$ cd client
```
```console
$ npm install
$ npm start
```


#Next Goals
Combine two and more algorithms. Utilize dropdown menu for users to choose between them.
Maze intializer, random maze, clear maze function to be provided.
Backend error catcher.
