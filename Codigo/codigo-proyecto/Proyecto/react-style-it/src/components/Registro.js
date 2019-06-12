import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import'../estilos/Registro.css'
import { format } from 'util';

class RegistroUser extends React.Component{
    state = {};

    handleClick = e => {
        console.log("Han presionado el boton")
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form submit")
        console.log(this.state)
    };

    render(){
        return(
            <React.Fragment>
                <div className="formulario">
                    <div className="titulo"><h2>Registrarse.</h2></div>
                    <form className="Method">
                        <div className="input-group">
                            <input className="input-1" type="text" placeholder="Name" name="name" />
                        </div>
                        <div className="input-group">
                            <input className="input-2" type="text" placeholder="Fecha de nacimiento" name="birthday"/>
                        </div>
                        <div className="input-group">
                            <select name="gender" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                <option disabled="disabled" selected="selected">Genero</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <input className="input-4" type="text" placeholder="Nombre de usuario" name="id" />
                        </div>
                        <div className="input-group">
                            <input className="input-5" type="text" placeholder="Email" name="email" />
                        </div>
                        <div className="input-group">
                            <input className="input-6" type="text" placeholder="Contraseña" name="password" />
                        </div>
                        <div class="p-t-10">
                            <button class="btn-submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default RegistroUser;