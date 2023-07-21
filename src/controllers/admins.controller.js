const bcrypt = require('bcryptjs');

const AdminModel = require('../models/admin.model');
const { createToken } = require('../helpers/utils');


const create = async (req, res) => {
    // usuario, email, password

    req.body.password = bcrypt.hashSync(req.body.password, 8);

    try {
        const [result] = await AdminModel.insertAdmin(req.body);
        const [admin] = await AdminModel.getByAdminId(result.insertId);
        res.json(admin[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};


const checkLogin = async (req, res) => {

    const [admin] = await AdminModel.getByEmail(req.body.email);
    if (admin.length === 0) {
        return res.json({ fatal: 'error en email y/o contraseña' });
    }

    const adminis = admin[0];

    const iguales = bcrypt.compareSync(req.body.password, adminis.password);
    if (!iguales) {
        return res.json({ fatal: 'error en email y/o contraseña' });
    }

    res.json({
        success: 'Login correcto 🥳',
        token: createToken(adminis)
    });
}

const getAllAdmin = async (req, res) => {
    try {
        const [administradores] = await AdminModel.getAdmin();
        res.json(administradores)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const actualizaAdmin = async (req, res) => {
    try {
        const { adminId } = req.params
        const [result] = await AdminModel.updateById(adminId, req.body);
        const [administradores] = await AdminModel.getByAdminId(adminId)
        res.json(administradores[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}


const removeAdmin = async (req, res) => {
    try {
        const { adminId } = req.params
        const [deletedOne] = await AdminModel.deleteAdmin(adminId);
        res.json(deletedOne)
    } catch (error) {
        res.json({ fatal: error.message })
    }

}

module.exports = {
    getAllAdmin, actualizaAdmin, removeAdmin, checkLogin, create
}