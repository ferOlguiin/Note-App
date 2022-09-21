import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";

export const Profile = () => {

    const {user, logout} = useAuth0();

  return (
    <div className="card py-3 px-4 my-1 glaseado d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex mb-3">
          <img className="rounded-circle shadow" src={user.picture} alt="img"/>
          <div className="ms-3 d-flex flex-column justify-content-center align-items-start">
            <h3 className="m-0 p-0">{user.nickname}</h3>
            <span className="mb-2">{user.email}</span>
          </div>
        </div>
        <div className="d-flex flex-column">
            <Link to="/vertareas" className="btn-yellow m-1">Ver mis notas</Link>
            <Link to="/nuevatarea" className="btn-yellow m-1">Crear nota rápida</Link>
            <Link to="/ayuda" className="btn-yellow m-1">Ayuda</Link>
            <button className="btn-red m-1" onClick={() => logout()}>Cerrar sesion</button>
        </div>
    </div>
  )
}