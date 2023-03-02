import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

export const obtenerTareaRequest = async (id) => await axios.get(`${url}/tareas/${id}`);

export const obtenerUnaTareaRequest = async id => await axios.get(`${url}/tarea/${id}`);

export const crearTareaRequest = async (nuevosCampos) => await axios.post(`${url}/creartarea`, nuevosCampos);

export const editarTareaRequest = async (id, nuevosCampos) => await axios.put(`${url}/editar/${id}`, nuevosCampos);

export const borrarTareaRequest = async (id) => await axios.delete(`${url}/borrar/${id}`);
