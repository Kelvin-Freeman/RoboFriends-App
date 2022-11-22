import React from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox.js"
import { robots } from "./robots";


const App = () => {
    return(
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox />
            <Cardlist robots={robots} />
        </div>
    )
}

export default App