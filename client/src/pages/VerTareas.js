import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import {useTarea} from '../context/tareaContext';
import {IoAdd, IoReturnUpBack} from 'react-icons/io5';

export const VerTareas = () => {
    
  
  const {task, obtenerTareas, idUser} = useTarea();
  const {user} = useAuth0();
  const fav = true;
  console.log(task)
  useEffect(() => {
    obtenerTareas(idUser);
}, [idUser])

  return (
    <div className='container'>

        <div className='d-flex justify-content-around flex-column flex-md-row align-items-center pb-3 pt-5'>
          <h1 className='m-0 text-center fw-bold text-white'>{task.length === 0 ? "No tienes notas " : "Aquí estan tus notas "} {user.nickname} </h1>
          <div className='d-flex flex-column flex-sm-row'>
            <Link to="/" className='btn-yellow m-1'><IoReturnUpBack className='fs-5'/>Volver al inicio</Link>
            <Link to="/nuevatarea" className="btn-green m-1"><IoAdd className='fs-5'/>Agregar nota</Link>
          </div>
        </div>

        <div className='container pb-5 mt-1'>
          <div className='row g-2 p-2 mt-2 mb-4'>
            
          </div>
          <div className='row g-2 p-2'>
            
          </div>
        </div>

    </div>
  )
}

