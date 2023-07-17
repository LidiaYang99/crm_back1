const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario.model');
const Admin = require('../models/admin.model');

const checkUsuarioId = async (req, res, next) => {
    const { usuarioId } = req.params;
    const [usuarios] = await Usuario.getById(usuarioId);
    if (usuarioId.length === 0) {
        return res.send({ fatal: 'El usuario no existe' });
    }
    next();
};

const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Necesitas la cabecera de autorización' });
    }
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, 'hola carola')
    } catch (error) {
        return res.json({ fatal: error.message });
    }
    const [admin] = await Admin.getById(obj.userId);
    req.user = admin[0];

    next();
}




module.exports = {
    checkUsuarioId, checkToken
}