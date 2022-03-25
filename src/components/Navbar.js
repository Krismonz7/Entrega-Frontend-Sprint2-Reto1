import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        Sistema Maestro Geek
                    </Link>
                    <Link 
                     className="navbar-brand"
                     to="/"
                    >
                    </Link>

                    <div className="navbar-collapse">
                        <div className="navbar-nav">
                            
                            <NavLink
                                activeClassName={(navData)=>navData.isActive ? "active nav-item nav-link":"nav-item nav-link"}
                                className="nav-item nav-link"
                                exact
                                to="/Estudiantes"
                            >
                                <img src='.../images/adcount.svg' alt=''></img>
                                Estudiantes
                            </NavLink>
                            <NavLink
                            activeClassName={(navData)=>navData.isActive ? "active nav-item nav-link":"nav-item nav-link"}
                                className="nav-item nav-link"
                                exact
                                to="/"
                            >
                                Buscar
                            </NavLink>
                        </div>
                    </div>


                </nav>
            </div>
        )
    }
}
