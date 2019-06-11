import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import {Link} from 'react-router-dom'
import NavbarExtras from '../components/Extras.js'
import Busqueda from '../components/Busqueda.js'
import RegistroUser from '../components/Registro.js'
import logo from '../imagenes/Style-it.png'
import Texto from '../components/Texto.js'




class NavBarComponents extends Component{
    render (){
        return(
            <div className="Navbar">  
                <div className ="container-fluid" >
                    <div className="row">
                        <div className="col-7">
                            <a className="NavBar__brand" href="/home">
                            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
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