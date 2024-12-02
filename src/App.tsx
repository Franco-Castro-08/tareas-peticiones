import { useEffect, useState } from "react";
import { ITareas } from "./types/ITareas";
import TareaForm from "./components/TareaForm";

function App() {
  // const [tareas, setTareas] = useState<ITareas[]>([])

  // const traerTareas = async () => {
  //   const res = await fetch('http://localhost:3000/tareas');
  //   const JSONres = await res.json();
  //   setTareas(JSONres)
  // }


  // useEffect(() => {
  //   traerTareas()
  // }, [])

  // console.log(tareas)
  return (
    <>
      <TareaForm/>
        {/* {tareas.map((tarea) => (
          <>
          <h1>{tarea.nombre}</h1>
            
          </> 
        ))}  */}
      {/* <PersonaForm/> */}
      
    </>
  )

}

export default App
