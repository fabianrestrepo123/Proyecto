import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import '../estilos/Footerstyle.css'


class NavFooter extends Component{
    render (){
        return(
            <footer class="footer_1">
                <div class="container-fluid">
                    <div className="row-3">
                        <span class="text">
                            le footer.
                        </span>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </footer>
        )
    }
}
export default NavFooter;