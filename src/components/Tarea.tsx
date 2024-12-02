import { FC } from "react"
import { ITareas } from "../types/ITareas"

const Tarea: FC<ITareas> = ({nombre, prioridad, finalizada}) => {
    return (
        <>
            <p>{nombre}</p>
            <p>{prioridad}</p>
            <p>{finalizada}</p>
        </>
    )
}

export default Tarea