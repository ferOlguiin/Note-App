import { Link } from "react-router-dom"

export const Ayuda = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-start text-white px-3 py-3">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <h1>Sección de ayuda</h1>
            <p>¡Hola! En este apartado puedes encontrar todo lo que necesitas respecto de Note-App</p>
        </div>

        <h2 className="mt-3 mb-1">Creación de notas</h2>
        <p>Para crear una nota puedes hacerlo desde los botones "Crear nota rapida" o desde "+Agregar nota". Al momento de crear una nota y llegar al formulario los campos necesarios son los primeros 2 nada más, titulo y descripcion. Puedes ignora por completo los demas campos ya que no influiran en la creación de tu nota.</p>

        <h2 className="mb-1">Notas favoritas</h2>
        <p>Si necesitas destacar alguna nota por su relevancia lo puede hacer clickeando el logo de la estrella negra. En caso que ya no necesites destacar la nota en cuestión, debes clickear la estrella amarilla que se encuentra en el margen inferior de tu nota.</p>

        <h2 className="mt-3 mb-1">Botones de las notas</h2>
        <p>Cada vez que necesites editar/modificar una nota, clickea el lapiz de edicion que se encuentra en el margen inferior de la nota y apareceras en un formulario en el cual podrás editar los campos que desees.
        Para eliminar una nota, clickea el basurero y veras una notificación que te avisará si tu nota se elimino o si hubo algún problema al intentar elinarla.  
        </p>

        <h2 className="mt-3 mb-1">Estas notas... ¿Las veo sólo yo?</h2>
        <p>Exacto, las notas que crees con tu usuario registrado sólo seran visibles para ese usuario, ya que el mismo genera un id único el cual liga las notas a tal id.</p>
        
        <Link to="/" className="btn btn-warning mt-3">Volver al inicio</Link>
    </div>
  )
}

