
import React, { CSSProperties, Component } from 'react';
import Header from './Header';
import Content from './Content';
import Navbar from './Navbar';
import Footer from './Footer';


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

       <div style={{...rootStyle}}>
        <Header onMenuClick={this.toggleSidebar}/>
        <Content/>
        <Navbar
          isOpen={this.state.isSidebarOpen}
          onSidebarClose={this.toggleSidebar}
        />
        <Footer />
        </div>
    );
}
}


const rootStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
}

export default Layout;