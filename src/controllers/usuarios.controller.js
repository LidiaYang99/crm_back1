const Usuario = require("../models/usuario.model");
const bcrypt = require('bcryptjs');

const { createUserToken } = require('../helpers/utils');


const getAll = async (req, res) => {
    try {
        const [usuarios] =
            await Usuario.getUsers()
        res.json(usuarios)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getUser = async (req, res) => {

    try {
        const [usuarios] = await Usuario.getById(req.params.usuarioId);

        if (usuarios.length === 0) {
            return res.json({ fatal: 'no existe un usuario con ese id ' })
        }
        res.json(usuarios[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getProfile = async (req, res) => {
    res.json(req.user)
}








const createUsers = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    try {
        const [result] = await Usuario.insert(req.body)
        const [usuarios] = await Usuario.getById(result.insertId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}
const updateUsuario = async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const [result] = await Usuario.updateUser(usuarioId, req.body);
        const [usuarios] = await Usuario.getById(usuarioId);
        res.json(usuarios[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

/* const updateUsuario = async (req, res) => {
    try {
        const { usuarioId } = req.params
        const [result] = await Usuario.updateUser(usuarioId, req.body);
        const [usuarios] = await Usuario.getById(result.insertId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
} */

const deleteUsers = async (req, res) => {
    try {
        const { usuarioId } = req.params
        const [deletedOne] = await Usuario.remove(usuarioId);
        res.json(deletedOne)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getByDate = async (req, res) => {
    try {
        const { usuarioId, fecha } = req.params

        const [proyectos] = await Usuario.getHour(usuarioId, fecha)
        res.json(proyectos)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}
const registroHours = async (req, res) => {
    /* body {
  "usuario_id": 21,
  "proyecto_id": 2,
  "horas_dedicadas":10,
  "fecha": "2023-07-20"
} 
ademas del body tenemos req.user con los datos del usuario logado y eso lo tenemos por atravesar checktoken

*/
    try {
        const [result] = await Usuario.registerHour(req.body)
        const [usuarios] = await Usuario.getById(result.insertId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}
const checkLoginUser = async (req, res) => {

    const [users] = await Usuario.getByEmailUser(req.body.email);
    if (users.length === 0) {
        return res.json({ fatal: 'error en email y/o contraseña' });
    }
    const user = users[0];
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if (!iguales) {
        return res.json({ fatal: 'error en email y/o contraseña' });
    }
    res.json({
        success: 'Login correcto',
        token: createUserToken(user)
    });
}

module.exports = {
    getAll, getUser, createUsers, deleteUsers, updateUsuario, getByDate, registroHours, checkLoginUser, getProfile
}
