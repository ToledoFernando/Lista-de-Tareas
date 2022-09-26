export function getTask(){
    const tareas = localStorage.getItem("tarea");
    return JSON.parse(tareas)
}

export function setTask(e){
    const tareas = getTask();
    if(!tareas) {
        e.id = 1;
        const array = [e];
        localStorage.setItem("tarea", JSON.stringify(array));
        return;
    }
    const ultimo = tareas[tareas.length-1];
    e.id = ultimo.id+1;
    tareas.push(e);
    localStorage.setItem("tarea", JSON.stringify(tareas));
    return;
}

export function DeleteTask(id){
    const Tareas = getTask();
    const NewTareas = Tareas.filter((e) => e.id != id)
    if(NewTareas.length >= 1){
        localStorage.setItem("tarea", JSON.stringify(NewTareas))
        return NewTareas
    }else{
        localStorage.removeItem("tarea")
        return [];
    }
}

//Seleccionar tarea por id para editar
export function selectTask(id){
    const Tareas = getTask();
    const tarea = Tareas.filter((e)=> e.id == id)
    return tarea[0]
}

//Guardar cambio de la tarea editada
export function EditTask(NewDatos){
    const Tareas =  getTask();
    Tareas.map((e)=>{
        if(e.id === NewDatos.id){
            e.titulo = NewDatos.titulo
            e.tareaInfo = NewDatos.tareaInfo
        }
    })
    localStorage.setItem("tarea", JSON.stringify(Tareas))
    return;
}