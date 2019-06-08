import React , {Component} from 'react'
import {Link} from 'react-router-dom'

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
                <h1>Nuevo Usuario</h1>

                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Nombres</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input 
                            
                            className="form-control" 
                            type="text" 
                            name="lastName"
                        />
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input 
                         
                            className="form-control" 
                            type="email" 
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label>En que trabajas</label>
                        <input 
                            
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            
                        />
                    </div>
                   
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </React.Fragment>
        )
    }
}
export default RegistroUser;