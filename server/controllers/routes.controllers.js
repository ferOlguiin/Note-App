import Tarea from "../models/Tarea.js";
import { PORT } from "../config.js";
import nodemailer from 'nodemailer';

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


export const sendMail = async (req, res) => {
    const {name, email, phone, info, emailAdmin, emailPassAdmin} = req.body;
    const message = {
        from: email,
        to: emailAdmin,
        subject: `${name} te ha escrito desde la web`,
        text: `El usuario ${name}, con email ${email}, ${info ? `les ha dejado el siguiente mensaje: "${info}"` : "No dejo un mensaje, solo dejo sus contactos para que lo comuniquen."}. ${phone ? `El telefono que dejo este usuario es ${phone}` : "Este usuario no dejo ningún teléfono de contacto."}`
    };

    const config = {
        service : "gmail",
        host: 'smtp.gmail.com',
        port : 587,
        auth : {
            user: emailAdmin,
            pass: emailPassAdmin
        }
    };

    const transport = nodemailer.createTransport(config);
    const mailInfo = await transport.sendMail(message);

    if(mailInfo.messageId){
        return res.send(mailInfo);
    } else {
        return res.status(400).send("No se pudo enviar el mail correctamente");
    }
}