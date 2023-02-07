import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { id: 1, name: "Linda" },
        { id: 2, name: "Frank" },
        { id: 3, name: "Jacky" },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
