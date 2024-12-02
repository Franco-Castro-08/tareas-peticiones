import { ChangeEvent, useEffect, useState } from "react";
import { ITareas } from "../types/ITareas";
import { DELETE, POST } from "../services/peticiones";
import { GrFormClose } from "react-icons/gr";
import { FaPencil } from "react-icons/fa6";

const TareaForm = () => {
  const [tareas, setTareas] = useState<ITareas[]>([]);
  const [values, setValues] = useState<ITareas>({
    id: "",
    nombre: "",
    prioridad: "",
    finalizada: false,
  });

  const traerTareas = async () => {
    const res = await fetch("http://localhost:3000/tareas");
    const JSONres = await res.json();
    setTareas(JSONres);
  };

  useEffect(() => {
    traerTareas();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const res = await POST("http://localhost:3000/tareas", values);
    console.log(res);
  };

  const handleDelete = async (id: string) => {
    return await DELETE(`http://localhost:3000/tareas/${id}`)
    // const res = await DELETE(`http://localhost:3000/tareas/${id}`);
    // setTareas(tareas.filter((tarea) => tarea.id !== id));
    // console.log(res);
  };

  const handleEdit = () => {
    
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-4 bg-blue-500">
        <h1 className="text-2xl font-bold text-center mb-4">Lista de Tareas</h1>
        <div className="flex justify-center">
          <div className="bg-blue-500 p-4">
            {tareas.map((tarea) => (
              <>
                <div className="text-2x1 font-bold flex" key={tarea.id}>
                  <p>
                  {tarea.nombre} {"----"}
                  </p>  
                  <p>
                  {tarea.prioridad} {"---"}
                  </p>
                   
                  <input type="checkbox" name="finalizada" />{" "}
                  <button>
                    <FaPencil />
                  </button>
                  <button onClick={()=> handleDelete(tarea.id)}>
                    <GrFormClose />
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
        <br />
        <div className="flex justify-center bg-blue-500">
          <ul className="space-y-4">
            {/* <input type="text" onChange={handleChange} name='nombre' />
            <input type="text" onChange={handleChange} name='apellido' /> */}
            <div className="flex items-center">
              <div>
                <input
                  className="bg-gray-500"
                  type="text"
                  name="nombre"
                  placeholder="nombre"
                  onChange={handleChange}
                />
              </div>
              <div>
                <select
                  className="bg-gray-400"
                  name="prioridad"
                  onChange={handleChange}
                >
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>
              </div>
            </div>
            {/* <input type='checkbox' name='finalizada' onChange={handleChange}/> */}
          </ul>
        </div>
        <br />
        <div className="flex justify-center">
          <button className="bg-green-500" onClick={handleSubmit}>
            CREAR TAREA
          </button>
        </div>
      </div>
    </>
  );
};

export default TareaForm;
