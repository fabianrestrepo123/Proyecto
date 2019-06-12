import React, {Component} from 'react';
import NavbarComponent from './NavBarComponents'
import NavFooter from './Footer'
import Texto from './Texto'

const Layout = (props) =>{
    return (
        <React.Fragment>
            <NavbarComponent />
            <NavFooter />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;