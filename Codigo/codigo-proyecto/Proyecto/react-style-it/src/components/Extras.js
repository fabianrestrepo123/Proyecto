import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import {Link} from 'react-router-dom'
import '../estilos/Botones.css'


class NavbarExtras extends Component{
    render(){
        return(  
            <div>
                <button type="button" class="btn btn-primary2">Registrarse</button>
            </div>
        )
    }
}
export default NavbarExtras;