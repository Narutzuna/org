import "./ListaOpciones.css"

const ListaOpciones = () => {

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

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select>
            { equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones;
