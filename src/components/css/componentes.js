import styled from 'styled-components';
const Tarjeta = styled.div`
width: 70%;
height: 100%;
min-width: 275px;
margin: 2% auto;
background: hsl(0, 0%, 100%);
border-radius: 7px;
flex-wrap: wrap;
display: flex;
flex-direction: row;
box-shadow: 2px 10px 12px 1px rgba(0, 0, 0, 0.2);
border-left: 7px solid hsl(180, 29%, 50%);
`

const Contenedor = styled.div`
width: 100%;
height: 100%;
background: hsl(180, 31%, 95%);
display: flex;
flex-direction: column;
border-radius: 5px;
min-width: 375px;
`

const Header = styled.div`
width: 100%;
height: 100%;
background: hsl(180, 29%, 50%);
display: flex;
flex-direction: column;`

const Headerimg = styled.img`
width: 100%;
height: 100%;
`
const Seccion1 = styled.div`
width: 10vw;
height: 20vh;
margin: auto;
min-width: 100px;
`

const Contenedor_Imagen = styled.div`
width: 100%;
height: 100%;
margin: auto;
`
const Imagen = styled.img`
width: 100%;
height: 100%;
margin: auto;
`



const Seccion2 = styled.div`
width: 35%;
height: 25vh;
display: flex;
flex-direction: column;
margin: auto;
`

const Empresa = styled.h5`
font-size: 20px;
text-align: left;
color:hsl(180, 29%, 50%);
margin:3% auto;
`

const Puesto= styled.h3`
font-size: 25px;
color: hsl(180, 14%, 20%);
text-align: left;
margin:3% auto;
`

const Caracteristicas= styled.h6`
font-size: 20px;
text-align: left;
margin:3% auto;
color: gray;
`

const Seccion3 = styled.div`
width: 35%;
height: 25vh;
display: flex;
margin: auto;
flex-wrap: wrap;
`
const Etiqueta = styled.div`
background: hsl(180, 31%, 95%);
width: 22%;
height: 30%;
display: flex;
flex-direction: column;
border-radius: 5px;
text-align: center;
color: hsl(180, 29%, 50%);
margin: auto;
`




export {Headerimg,Header,Contenedor,
    Tarjeta,Seccion1,Seccion2,Seccion3,
    Imagen,Contenedor_Imagen,Empresa,Puesto,Caracteristicas,Etiqueta};