import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map((arreglo, index) => return trasformacion {})
    const equipos = [
        "Programació",       
        "Front End",      
        "Data Science",     
        "Devops",  
        "UX y Diseño",   
        "Móvil",  
        "Innovación y Gestión",
    ]

    const manejarCambio = (e) => {
        console.log('cambio', e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value='' disabled defaultValue='' hidden>Seleccionar equipo</option>
            { equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones;
