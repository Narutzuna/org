import CampoTexto from "../CampoTexto";
import "./Formulario.css"

const Formulario = () =>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo='Nombre' placeholder='Introdusca su nombre'/>          
            <CampoTexto titulo='Puesto' placeholder='Introduzca su puesto'/>          
            <CampoTexto titulo='Foto' placeholder='Introduzca la URL de la foto'/>
        </form>
    </section>
} ;

export default Formulario