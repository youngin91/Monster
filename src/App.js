import React, { Component } from "react";
import CardContainer from "./components/card-container/CardContainer";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.ref = React.createRef(false);
    this.state = {
      monster: [],
      SearchFeild: ""
    };
  }
  componentDidMount() {
    if (this.ref.current) {
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monster: data }));
    this.ref.current = true;
  }
  

  render() {
    const filteredList = this.state.monster.filter((item) =>
      item.name.toLowerCase().includes(this.state.SearchFeild.toLowerCase())
        ? item
        : null
    );
    return (
      <div className="app">
        <h1 className="app__title">Monsters Rolodex</h1>
        <SearchBox
          value={this.state.SearchFeild}
          onChange={(event) => {
            this.setState({ SearchFeild: event.target.value });
          }}
        />
        <CardContainer data={filteredList} />
      </div>
    );
  }
}

export default App;
