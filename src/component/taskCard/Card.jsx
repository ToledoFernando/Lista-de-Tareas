import { DeleteTask, selectTask } from "../../log/log";
import './Card.css';


export default function Card({tarea, setTareas, setEditando, setTarea}){
    
    function Delete(e){
        const id = e.target.parentElement.parentElement.id;
        setTareas(DeleteTask(id))
    }

    function Editar(e){
        const id = e.target.parentElement.parentElement.id
        setEditando(true)
        const tarea = selectTask(id)
        setTarea(tarea)
    }

    return (
        <div className="Card" id={tarea.id}>
            <div className="info">
                <h1>{tarea.titulo}</h1>
                <textarea value={tarea.tareaInfo} disabled cols="30" rows="2"></textarea>
            </div>
            <div className="botones">
                <button className="Editar" onClick={Editar}>Editar</button>
                <button className="Eliminar" onClick={Delete}>Eliminar</button>
            </div>
        </div>
    )
}