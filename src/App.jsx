import './App.css'
import { EditTask, getTask, setTask } from './log/log';
import {useState, useEffect} from 'react';
import Card from './component/taskCard/Card';
import icono from './component/icono2.jpg';


const initial = {
  titulo: "",
  tareaInfo: ""
}

function App() {

  //estados para controlar el formulario, lista de tareas y si esta editando
  const [editando, setEditando] = useState(false);

  const [Tareas, setTareas] = useState([]);

  const [tarea, setTarea] = useState(initial);
  
  //

  const HandleChange = (e)=>{
    setTarea({...tarea, [e.target.name]: e.target.value})
  }
  
  const HandleSubmit = (e)=>{
    e.preventDefault();
    if(editando){
      EditTask(tarea)
      setEditando(!editando)
      setTarea(initial)
      setTareas(getTask())
    }else{
      setTask(tarea)
      setTarea(initial)
      setTareas(getTask())
    }
  }

  useEffect(()=>{
    if(getTask()){
      setTareas(getTask())
    }
  }, [])

  return (
    <div className="App">
      {editando ? <h1 className='Edit'>Editando</h1> : null}
      <form onSubmit={HandleSubmit}>
        <div className="icono">
          <img src={icono} alt="" />
        </div>
        <div className="formulario">
          <button disabled={!editando} className="Cancelar" onClick={()=> HandleSubmit}>X</button>
          <label>Titulo</label><br />
          <input autoComplete='off' maxLength="20" type="text" name='titulo' onChange={HandleChange} value={tarea.titulo} placeholder='Titulo de la tarea... max(20c)'/><br />
          <label>Tarea</label><br />
          <textarea name='tareaInfo' maxLength="75" placeholder='Info de la tarea ...max(75c)' onChange={HandleChange} value={tarea.tareaInfo} cols="30" rows="10"></textarea><br />
          <br />
          <input type="submit" className='submit' value={editando ? "Guardar" : "Agregar"} />
        </div>
      </form>
      {Tareas.length >= 1 ? Tareas.map((task) => {
        return <Card key={task.id} setEditando={setEditando} setTarea={setTarea} setTareas={setTareas} tarea={task}/>
      }) : <h1 className='SinTarea'>Sin Tareas</h1> }
    </div>
  )
}

export default App
