import React, { Component } from 'react'
//import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                    <a
                        className="navbar-brand"
                        href="/"
                    >
                        Sistema Maestro Geek
                    </a>
                    <a 
                     className="navbar-brand"
                     href="/"
                    >
                    <img 
                        src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png" 
                        id="icon" 
                        alt="User Icon" 
                        width="100px"/>
                    </a>

                    <div className="navbar-collapse">
                        <div className="navbar-nav">

                            <a
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                href="/Estudiantes"
                            >
                                Estudiantes
                            </a>

                            <a
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                href="/"
                            >
                                Buscar
                            </a>
                        </div>
                    </div>


                </nav>
            </div>
        )
    }
}
