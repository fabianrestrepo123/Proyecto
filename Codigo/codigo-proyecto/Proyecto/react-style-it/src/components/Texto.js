import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../estilos/Informacion.css'

class Texto extends Component{
    render(){
        return(
            <div class="card">
                <div class="card-body">
                   <h7>Nuestro proyecto es un sitio web que se transmite al usuario, se imprime digitalmente,
                       <h7>se personaliza uno de nuestros productos, bien mar camisas,</h7>
                       <h7>camisetas, camibusos, camisetas manga larga y camisillas o gorras, visera plana y béisbol, también sirven el lugar,</h7> 
                       <h7>bien Mar en las mangas, en la parte frontal y posterior de las camisas, en la parte frontal de las gorras.</h7> 
                       <h1></h1>
                       <h7>Nuestro público objetivo estará enfocado en jóvenes y adultos, y nuestros tejidos en gran variedad,</h7>
                        <h7>algodón, nylon, poliéster, licra, así como en la misma talla en las tallas, M hasta xxl ... etc.</h7> 
                        <h1></h1> 
                        <h7>Elegir el color de la preferencia, y para garantizar una buena impresión, utilizar los colores en CMYK, </h7>
                        ya que son pigmentos para imprimir, estar conectados con una empresa textilera,</h7>
                </div>
            </div>
        )
    }
}
export default Texto;