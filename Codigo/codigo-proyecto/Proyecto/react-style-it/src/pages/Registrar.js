import React from 'react'
import Registro from '../components/Registro'
import Layout from '../components/Layout'

class Registrar extends React.Component{
    render(){
        return(
            <div>
                <Layout />
                <Registro />
            </div>
        )
    }
}

export default Registrar