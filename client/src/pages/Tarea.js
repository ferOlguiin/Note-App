import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useTarea } from "../context/tareaContext";
import {GoBookmark} from 'react-icons/go';
import {IoReturnUpBack} from 'react-icons/io5';

export const Tarea = () => {

    const params = useParams();
    const {obtenerTarea} = useTarea();
    const [note, setNote] = useState({
        title: '',
        description: '',
        user: '',
        fav: '',
        date: ''
    })
    
    useEffect(() => {
        (async () => {
            const res = await obtenerTarea(params.id);
            setNote(res);
        })();
    }, [params.id])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="card-dark rounded shadow-lg imgNote" style={{width: "auto", height: "auto", maxWidth: 600, maxHeight: 800}}>
            {note.fav === 1 ? <GoBookmark className="fav-Tarea position-absolute fs-3 bg-warning rounded p-1"/> : ''}
            <h1 className="text-break text-center fw-bold mb-4 px-4 py-2">{note.title}</h1>
            <p className="text-break fs-4 text-start px-4">{note.description}</p>
            <p className="mt-4 mb-1 px-4 textTarea">Esta nota fue creada el {note.date}hs</p>
            <div className="d-flex justify-content-center align-items-center p-3">
                <Link to="/vertareas" className="btn btn-dark text-white btn-sm"><IoReturnUpBack className="fs-4"/></Link>
            </div>
        </div>
    </div>
  )
}

