import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import {Link} from 'react-router-dom'
import NavbarExtras from '../components/Extras.js'
import Busqueda from '../components/Busqueda.js'
import RegistroUser from '../components/Registro.js'



class NavBarComponents extends Component{
    render (){
        return(
            <div className="Navbar">  
                <div className ="container-fluid" >
                    <div className="row">
                        <div className="col-7">
                            <a className="NavBar__brand" href="/home">
                                <span className="Navbar__brand-text"> Style it</span>
                            </a>
                        </div>
                        <div className="row-0">
                            <Busqueda/>
                        </div>
                        <div className="row-2">
                            <NavbarExtras/>
                        </div>
                    </div>
                </div>
                
            </div>
              
        )
    }
}
export default NavBarComponents;