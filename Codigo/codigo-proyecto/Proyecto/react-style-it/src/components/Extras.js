import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import {Link} from 'react-router-dom'
import '../estilos/Botones.css'


class NavbarExtras extends Component{
    render(){
        return(  
            <div class="btn-group">
                <button type="button" class="btn-btn-default">Iniciar sesiòn</button>
                <button type="button" class="btn-btn-default">Registrarse</button>
            </div>
            
        )
    }
}
export default NavbarExtras;