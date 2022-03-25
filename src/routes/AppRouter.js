import React, { Component } from 'react';
import { BrowserRouter }from 'react-router-dom';
import Tarjetas from '../components/Tarjetas';

export default class AppRouter extends Component {
  render() {
    return (

        <BrowserRouter>

          <Tarjetas></Tarjetas>


        </BrowserRouter>
      
    )
  }
}