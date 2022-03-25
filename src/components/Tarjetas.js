import axios from "axios";
import React, { Component } from 'react';
import {Headerimg,
    Header,Contenedor,
    Tarjeta,Seccion1,
    Seccion2,Seccion3,Imagen,
    Contenedor_Imagen,Empresa,Puesto,Caracteristicas
    ,Etiqueta
} from './css/componentes';
/*
import { Modal, ModalBody, ModalFooter} from 'reactstrap';
*/

/*Imagenes */
import Insure from './images/Insure.svg';
import Loop_studios from './images/Loop_studios.svg';
import Manage from './images/Manage.svg';
import My_home from './images/My_home.svg';
import Photosnap from './images/Photosnap.svg';
import Shortly from './images/Shortly.svg'; 
import Faceit from './images/faceit.svg';
import Eyecam from './images/Eyecam.svg';
import Account from './images/account.svg';

import header from './images/bg-header.svg';

import './css/styles.css'

const url= "https://reto-1-sprint-dos.herokuapp.com/tarjetas/";

export default class Tarjetas extends Component {


    constructor (){
        super();
        this.state={
            data:[],
            modalEliminar: false

        }
    }


    componentDidMount(){
        this.peticionGet()
    }


    peticionGet = () => {
        axios.get(url)
        .then(resp => {this.setState({data: resp.data})})
        .catch(error => console.log(error))
    }




/*Parte de las tarjetas */
/*                                        <td>{empresa.id}</td>
                                        <td>imagen</td>
                                        <td>{empresa.nombre}</td>
                                        <td>{empresa.bacante}</td>
                                        <td>{empresa.caracteristicas}</td>
                                        <td>{empresa.etiqueta}</td>
                                        <td>{empresa.etiqueta1}</td>
                                        <td>{empresa.etiqueta2}</td>
                                        <td>{empresa.etiqueta3}</td> */



    render() {
        


        return (
            <Contenedor>
                <Header>
                <Headerimg src={header} alt=''/>
                </Header>
                

                        {this.state.data.map(empresa =>{
                           
                                if(empresa.imagen === 'Photosnap') {
                                    console.log(empresa.imagen)
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Photosnap}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "Manage") {
                                   
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Manage}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "Account") {
                                   
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Account}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "My_home") {
                                  
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={My_home}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "Loop_studios") {
                                    
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Loop_studios}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "Faceit") {
                                    
                                    return(
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Faceit}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "Shortly") {
                                   
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Shortly}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "Insure") {
                                  
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Insure}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>
    
                                        
                                    )
                                }
                                if(empresa.imagen === "Eyecam") {
                                    return(
                                    
                                        <Tarjeta key={empresa.id}>
                                            <Seccion1 className="imagen">
                                            <Contenedor_Imagen>
                                            <Imagen src={Eyecam}  alt=""/>
                                            </Contenedor_Imagen>
                                            </Seccion1>
                                            <Seccion2>
                                                <Empresa>{empresa.empresa}</Empresa>
                                                <Puesto>{empresa.bacante}</Puesto>
                                        
                                                    <Caracteristicas>{empresa.caracteristicas}</Caracteristicas>
                                                
                                            </Seccion2>
                                            <Seccion3>
                                            <Etiqueta>{empresa.etiqueta}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta1}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta2}</Etiqueta>
                                            <Etiqueta>{empresa.etiqueta3}</Etiqueta>
                                            </Seccion3>
                                        </Tarjeta>)} 
                            
                            })
                            
                            
                        }

                        
        </Contenedor>
        )
}

}

