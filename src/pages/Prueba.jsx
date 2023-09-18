import { useParams } from "react-router-dom"

const  Prueba = () => {
    const { id } = useParams();
return (
    <div><p>el id es :</p>{ id }</div>
)
}

export default Prueba