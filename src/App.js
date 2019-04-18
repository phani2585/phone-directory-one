import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          Phone Directory
      </div>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>PhoneNumber</span>
        </div>
        <label htmlFor="text">Name : </label>
        <input type="text" placeholder="Type Here"/>
      </div>
    );
  }
}

export default App;
