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
                    <div>
                        <div className="col-7">
                            <a className="NavBar__brand" href="/home">
                            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <form class="form-inline">
                    <div class="form-group mb-2">
                    <label for="inputEmail2" class="sr-only">Email</label>
                    <input type="email" readonly class="form-control" id="inputEmail2" placeholder="Email"/>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                    </div>
                <button type="submit" class="btn btn-primary mb-2">Inicar sesión</button>
                    </form>
                </div>
            </div>
              
        )
    }
}
export default NavBarComponents;