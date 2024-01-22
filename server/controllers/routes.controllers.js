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

export const sendMailLanding = async (req, res) => {
    const {name, email, phone, emailAdmin, emailPassAdmin} = req.body;
    const message = {
        from: email,
        to: emailAdmin,
        subject: `${name} envió sus datos en SomosAgenciaOcho para ver el VSL`,
        html: `<!DOCTYPE html>
        <html lang="es">
              <head>
                <title>Usuario nuevo en Somos Agencia Ocho</title>
              </head>
              <body style="margin-bottom:20px; margin-top:20px">
                <header>
                  <img src="https://res.cloudinary.com/dcxzb95px/image/upload/v1702311105/stackMERN/fri4iwe6wcvr2bi5sje4.png" alt="agencia ocho" width="200px">
                </header>
                <main>
                  <h1>Datos enviados a través del formulario inicial de SomosAgenciaOcho</h1>
                  <p style="font-size:18px">${name} acaba de dejar los siguientes datos para poder ver el VSL de la landing page:</p>
                  <p style="font-size:18px"><b>Nombre:</b> ${name}</p>
                  <p style="font-size:18px"><b>Correo electrónico:</b> ${email}</p>
                  <p style="font-size:18px"><b>Teléfono:</b> ${phone}</p>
                </main>
              </body>
            </html>`
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


export const sendMailOlivos = async (req, res) => {
    const {name, email, phone, info, country, emailAdmin, emailPassAdmin} = req.body;
    const message = {
        from: email,
        to: emailAdmin,
        subject: `${name} escribió desde el formulario de la web`,
        html: `<!DOCTYPE html>
        <html lang="es">
              <head>
                <title>Nuevo contacto en Olivos-Arauco</title>
              </head>
              <body style="margin-bottom:20px; margin-top:20px">
                <header>
                  <h1 style="font-weight:bold; font-size:45px; color:#4d5d44">Olivos de Arauco Multiespacio</h1>
                </header>
                <main>
                  <h2 style="margin-top:30px; text-decoration:underline;">${name} ha dejado los siguientes datos a través del formulario</h2>
                  <p style="font-size:17px"><b>Nombre completo:</b> ${name}</p>
                  <p style="font-size:17px"><b>Email:</b> ${email}</p>
                  <p style="font-size:17px"><b>Teléfono:</b> ${phone}</p>
                  <p style="font-size:17px"><b>Nacionalidad:</b> ${country}</p>
                  <p style="font-size:17px"><b>Mensaje:</b> ${info}</p>
                </main>
              </body>
            </html>`
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