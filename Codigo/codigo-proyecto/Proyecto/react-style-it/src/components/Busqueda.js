import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import {Link} from 'react-router-dom'
import '../estilos/busquedaStyle.css'

class Busqueda extends Component{
    render (){
        return(
            <nav class="search">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                     <button class="buscar" type="submit">Buscar</button>
                </form>
            </nav>
        )
    }
}
export default Busqueda;
