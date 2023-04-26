import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    // Estado - hooks
    // useState()
    // const [nombreVarible, actulizarnombre] = useState(valorInicial)
    console.log(props)
    // const [mostrar, actulizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log('Mostrar/Ocultar elemento', !mostrar);
    //     actulizarMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="title">Mi orgranización</h3>
        <img src="/img/Botão add-01 1.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg