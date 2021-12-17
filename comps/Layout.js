import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";



class Layout extends React.Component {
    
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: true})
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    render() { 
        return (
            <div className = "content">
                <Navbar 
                 open={this.state.showSideDrawer}
                 closed={this.SideDrawerClosedHandlers}
                 drawerTogged={this.SideDrawerToggleHandler}/>
               
                    { this.props.children }
                <Footer/>
            </div>
        );
    }
}
 
export default Layout;