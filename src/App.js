import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainContentHandler from './Containers/MainContentHandler/MainContentHandler';
import Auth from './Containers/Auth/Auth';
import Admin from './Containers/Admin/Admin';
import Menu from './Components/Navigation/Menu/Menu';
import Sidebar from './Components/Navigation/Sidebar/Sidebar';

class App extends Component {
  state = {
    showSidebar: false
  }

  sidebarToggleHandler() {
    this.setState({ showSidebar: !this.state.showSidebar});
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          showSidebar={this.state.showSidebar}
          clicked={() => this.sidebarToggleHandler()} />
        <Menu 
          showSidebar={this.state.showSidebar}
          clicked={() => this.sidebarToggleHandler()} />
        <main>
          <Switch>
            <Route path="/login" exact component={Auth} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/"component={MainContentHandler} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
