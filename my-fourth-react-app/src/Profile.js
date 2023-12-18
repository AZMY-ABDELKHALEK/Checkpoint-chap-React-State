import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Azmy Abdelkhalek',
      bio: 'Life is now !',
      imgSrc: './Fb profile.jpg',
      profession: 'Web Developer',
    },
    shows: false,
    mountTime: 0,
  };

  componentDidMount() {
    this.setState({ mountTime: Date.now() });
    // Set up interval to update component every second
    this.intervalId = setInterval(() => {
      this.forceUpdate(); // Force update to trigger render and show updated time
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval to avoid memory leaks
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, mountTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.handleToggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((Date.now() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
