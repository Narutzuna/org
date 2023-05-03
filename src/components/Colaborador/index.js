import './Colaborador.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id } = props.datos
    const { colorPrimario, eliminarColaborador } = props

    return <div className='colaborador'>
        <AiOutlineCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)}></AiOutlineCloseCircle>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto}></img>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
} 

export default Colaborador