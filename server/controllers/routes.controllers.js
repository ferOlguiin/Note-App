import Tarea from "../models/Tarea.js";
import { PORT } from "../config.js";

export const welcome = (req, res) => {
    return res.send("Bienvenido usted se encuentra en el puerto: " + PORT);
}

export const obtenerTarea = async (req, res) => {
    try {
        const {id} = req.params;
        const tareas = await Tarea.find({user: id}).lean();
        return res.send(tareas);
    } catch (error) {
        console.log(error);
    }
};

export const crearTarea = async (req, res) => {

    try {
        const {title, description, user, fav, date} = req.body;
        const nuevaTarea = new Tarea({title, description, user, fav, date});

        await nuevaTarea.save();
        res.send(nuevaTarea);

    } catch (error) {
        console.log(error);   
    }
};

export const editarTarea = async (req, res) => {

    try {
        
        const {id} = req.params;
        const tareaActualizada = await Tarea.findByIdAndUpdate(id, req.body, {new: true});
        
        return res.send(tareaActualizada);

    } catch (error) {
        console.log(error);
    } 

};

export const borrarTarea = async (req, res) => {

    try {

        const {id} = req.params;
        await Tarea.findByIdAndDelete(id);
        return res.send("tarea borrada");

    } catch (error) {
        console.log(error);
    }

};

export const obtenerUnaTarea = async (req, res) => {

    try {

        const {id} = req.params;
        const tarea = await Tarea.findById(id);
        return res.send(tarea);

    } catch (error) {
        console.log(error);
    }

}

