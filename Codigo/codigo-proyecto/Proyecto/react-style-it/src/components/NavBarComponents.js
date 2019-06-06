import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import {Link} from 'react-router-dom'

class NavBarComponents extends Component{
    render (){
        return(
            <div className="Navbar">  
                <div className ="container-fluid" >
                    <div className="row">
                        <div className="col-10">
                            <a className="NavBar__brand" href="/home">
                                <span className="Navbar__brand-text"> Style it</span>
                            </a>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn__dark">LOGIN</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn__dark">SIGN UP</button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NavBarComponents;