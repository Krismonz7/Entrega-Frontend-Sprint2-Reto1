import axios from "axios";
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';



export default class Estudiantes extends Component {



    render() {
        return (
            <div className="container">
             <Navbar/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Celular</th>
                            <th>Dirección</th>
                            <th>Imagen</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>

                <Modal>
                    <ModalBody>
                        Está seguro de eliminar el estudiante
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                      >Sí</button>
                        <button className="btn btn-secundary"
                      >No</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
