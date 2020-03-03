import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Navigation/Menu/Menu';
import Sidebar from './Components/Navigation/Sidebar/Sidebar';
import MainContentHandler from './Containers/MainContentHandler/MainContentHandler';

class App extends Component {
  state = {
    showSidebar: false
  }

  sidebarToggleHandler() {
    this.setState({ showSidebar: !this.state.showSidebar});
  }

  render() {
    return (
      <div 
        className="App"
        style={{ backgroundColor: "lavender"}}>
        <Sidebar 
          showSidebar={this.state.showSidebar}
          clicked={() => this.sidebarToggleHandler()} />
        <Menu 
          showSidebar={this.state.showSidebar}
          clicked={() => this.sidebarToggleHandler()} />
        <main>
          <MainContentHandler />
        </main>
      </div>
    );
  }
}

export default App;
