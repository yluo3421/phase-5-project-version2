import React, { useState } from "react";

import Slides from "./Slides";
import Blog from "./Blog";

function HomePage({user}) {

  return (
    <div>
      <Slides />  
      <span className="text-center">
        <h1 className="fs-1 my-2"></h1>
      </span>
      <Blog />

    </div>
  );
}

export default HomePage;
