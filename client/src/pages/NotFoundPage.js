import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center flex-column">

            <h2 className="text-white px-5 fw-bold">La sección que intentas buscar no se encuentra, intenta ingresar con tu usuario o comprueba que sea la URL correcta.</h2>
            <Link to="/" className="btn btn-warning btn-lg">Ir al inicio</Link>

    </div>
  )
}