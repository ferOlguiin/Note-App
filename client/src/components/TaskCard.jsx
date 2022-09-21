import { Link } from "react-router-dom";
import { useTarea } from "../context/tareaContext";
import {VscEdit, VscTrash, VscStarEmpty, VscStarFull} from 'react-icons/vsc';
import {IoExpandOutline} from 'react-icons/io5';
import {GoBookmark} from 'react-icons/go';
import toast from 'react-hot-toast';

const TaskCard = ({item, fav}) => {

    
    const {borrarTarea, editarTarea} = useTarea();
    let nuevoTitle = '';
    let nuevaDesc = '';
    if(item.description.length > 30){
        const tittle = item.title.substring(0, 17);
        const desc = item.description.substring(0, 30);
        nuevoTitle = tittle + '...';
        nuevaDesc = desc + '...';
    } 

    const handleAddFav = async () => {
        try {
            await editarTarea(item._id, {fav: 1});
            toast.success("Nota añadida a favoritos");
        } catch (error) {
            toast.error("Error, vuelve a intentarlo")
        }
    };
    const handleRemoveFav = async () => {
        try {
            await editarTarea(item._id, {fav: 0});
            toast.success('Tu nota se removio de favoritos')
        } catch (error) {
            toast.error("Error, vuelve a intentarlo")
        }
    }

  return (
    <div className="col-md-4">
        <div className="card shadow imgCard" style={{width:"auto", height:"auto", maxHeight:210, maxWidth:420}}>
            <div className="card-body text-dark">
                {fav ? <GoBookmark className="fav fs-3 bg-warning rounded p-1"/> : ''}
                <h2 className="card-title">{item.title.length > 17 ? nuevoTitle : item.title}</h2>
                <p className="card-text fs-6 overflow-hidden">{item.description.length > 30 ? nuevaDesc : item.description}</p>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center">
                        <Link className="pe-1 py-0" to={`/editar/${item._id}`}><VscEdit className="text-success fs-4"/></Link>
                        <button className="btn px-1 mx-2 py-0" onClick={item.fav <= 0 ? handleAddFav : handleRemoveFav}>{item.fav > 0 ? <VscStarFull className="fs-4 text-warning"/> : <VscStarEmpty className="fs-4 text-dark"/>}</button>
                        <button className="btn px-1 py-0" onClick={async () => await borrarTarea(item._id)}><VscTrash className="fs-4 text-danger"/></button>
                    </div>
                    <Link to={`/vertarea/${item._id}`} className='btn btn-sm px-1 py-0'><IoExpandOutline className="text-black fs-4"/></Link>
                </div>
            </div>
            {
                item.fav <= 0 ? <div className="card-footer text-muted">
                                    <p className="textfooter m-0 p-0">Creada: {item.date}</p>
                                </div>
                                        : 
                                <div className="card-footer border-top border-warning text-muted">
                                    <p className="textfooter m-0 p-0">Creada: {item.date}</p>
                                </div>
            }
        </div>
    </div>
  )
}

export default TaskCard