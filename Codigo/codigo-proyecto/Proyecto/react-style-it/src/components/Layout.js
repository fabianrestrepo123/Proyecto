import React, {Component} from 'react';
import NavbarComponent from './NavBarComponents'
import NavFooter from './Footer'
import Texto from './Texto'
import NavbarExtras  from './Extras'
    

const Layout = (props) =>{
    return (
        <React.Fragment>
            <div>
            <NavbarComponent/>
            <Texto />
            <NavbarExtras/>
            < NavFooter />
            {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout;