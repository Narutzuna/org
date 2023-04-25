import CampoTexto from "../CampoTexto";
import "./Formulario.css"
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
    
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Mensaje envio', e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo='Nombre' placeholder='Ingresar nombre'/>          
            <CampoTexto titulo='Puesto' placeholder='Ingresar puesto'/>          
            <CampoTexto titulo='Foto' placeholder='Ingresar enlace de la foto'/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
} ;

export default Formulario