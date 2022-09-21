import axios from 'axios';


export const obtenerTareaRequest = async (id) => await axios.get("/tareas/" + id);

export const obtenerUnaTareaRequest = async id => await axios.get("/tarea/" + id);

export const crearTareaRequest = async (nuevosCampos) => await axios.post("/creartarea", nuevosCampos);

export const editarTareaRequest = async (id, nuevosCampos) => await axios.put("/editar/" + id, nuevosCampos);

export const borrarTareaRequest = async (id) => await axios.delete("/borrar/" + id);
