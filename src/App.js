import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{ name: "Linda" }, { name: "Frank" }, { name: "Jacky" }],
    };
  }

  render() {
    return (
      <div>
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
