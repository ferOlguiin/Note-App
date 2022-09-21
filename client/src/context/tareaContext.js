import { useAuth0 } from '@auth0/auth0-react';
import {createContext, useContext, useState} from 'react';
import toast from 'react-hot-toast';
import { borrarTareaRequest, crearTareaRequest, editarTareaRequest, obtenerTareaRequest, obtenerUnaTareaRequest } from '../api/backendConnect';


const tareaContext = createContext();

export const useTarea = () => {
    const context = useContext(tareaContext);
    return context;
};



export const TareaContainer = ({children}) => {

    const {user} = useAuth0();
    const idUser = user?.sub.split('|')[1];
    const [task, setTask] = useState([]);

    const obtenerTareas = async (id) => {
        const res = await obtenerTareaRequest(id);
        setTask(res.data);
    };
    const crearTareas = async (nuevosDatos) => {
        const res = await crearTareaRequest(nuevosDatos);
        //el todo lo que ya existe en las tareas, se agrega la nueva, gracias al operador de propagacion
        setTask([...task, res.data]);
        toast.success('Nota creada correctamente');
    };
    const editarTarea = async (id, nuevosDatos) => {
        const res = await editarTareaRequest(id, nuevosDatos, {new: true});
        //el item que sea estrictamente igual a un id valido se le insertaran los nuevos datos,
        //de lo contrario se pintan los mismos datos
        setTask(task.map((item) => (item._id === id ? res.data : item)));
    };
    const borrarTarea = async (id) => {
        await borrarTareaRequest(id);
        //todo item que tenga un ._id se queda, el resto se filtra
        setTask(task.filter(item => item._id !== id));
        toast.success("Nota eliminada correctamente");
    };
    const obtenerTarea = async (id) => {
        try {
            const res = await obtenerUnaTareaRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <tareaContext.Provider value={{task, setTask, obtenerTareas, crearTareas, editarTarea, borrarTarea, obtenerTarea, idUser}}>
        {children}
    </tareaContext.Provider>
 )
}

