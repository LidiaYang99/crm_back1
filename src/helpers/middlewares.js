const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario.model');
const AdminModel = require('../models/admin.model');


const checkTokenAdmin = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Necesitas la cabecera de autorización' });
    }
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, 'Hola carola')
    } catch (error) {
        return res.json({ fatal: error.message });
    }
    const [users] = await AdminModel.getByAdminId(obj.userId);
    req.user = users[0];

    next();
}

const checkTokenUser = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Necesitas la cabecera de autorización' });
    }
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, 'Hola carola')
    } catch (error) {
        return res.json({ fatal: error.message });
    }
    const [users] = await Usuario.getById(obj.userId);
    req.user = users[0];

    next();
}


module.exports = {
    checkTokenUser, checkTokenAdmin
}