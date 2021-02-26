
import React, { CSSProperties, Component } from 'react';
import Header from './Header';
import Content from './Content';
import { fullScreen } from './css';
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

       <div style={{...fullScreen, ...rootStyle}}>
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


const rootStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default Layout;