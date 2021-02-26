import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

interface Props {}
interface State {
  isSidebarOpen: boolean;
}

class Layout extends Component<Props, State>{
    state: State = {
        isSidebarOpen: false
      }
    
      toggleSidebar = () => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
      }
    
render() {
    return (
       <div>
        <Header onMenuClick={this.toggleSidebar}/>
        <Content/>
        <Navbar
          isOpen={this.state.isSidebarOpen}
          onSidebarClose={this.toggleSidebar}
        />
        
        </div>
    );
}
}
export default Layout;