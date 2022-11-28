import React, { Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox.js"
import { robots } from "./robots";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }
    render()  {
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox />
                <Cardlist robots={robots} />
            </div>
        )
    }
}

export default App