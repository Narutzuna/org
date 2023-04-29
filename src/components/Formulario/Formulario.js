import { useState } from "react";
import CampoTexto from "../CampoTexto";
import "./Formulario.css"
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actulizarNombre] =useState('')
    const [puesto, actulizarPuesto] =useState('')
    const [foto, actulizarFoto] =useState('')
    const [equipo, actualizarEquipo] =useState('')
    
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Mensaje envio')
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        console.log(datosEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo='Nombre' 
                placeholder='Ingresar nombre' 
                required 
                valor={nombre} 
                actualizarValor={actulizarNombre}/>          
            <CampoTexto 
                titulo='Puesto' 
                placeholder='Ingresar puesto' 
                required
                valor={puesto} 
                actualizarValor={actulizarPuesto}/>          
            <CampoTexto 
                itulo='Foto' 
                placeholder='Ingresar enlace de la foto' 
                required
                valor={foto} 
                actualizarValor={actulizarFoto}/>
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
} ;

export default Formulario