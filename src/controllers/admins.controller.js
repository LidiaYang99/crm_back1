const AdminModel = require('../models/admin.model')

const getAllAdmin = async (req, res) => {
    try {
        const [administradores] = await AdminModel.getAdmin();
        res.json(administradores)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}


const postNewAdmin = async (req, res) => {
    try {
        const [result] = await AdminModel.insertAdmin(req.body);
        const [administradores] = await AdminModel.getByAdminId(result.insertId);
        res.json(administradores[0])
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
        const { adinIdm } = req.params
        const [deletedOne] = await AdminModel.deleteAdmin(adinIdm);
        res.json(deletedOne)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

module.exports = {
    getAllAdmin, postNewAdmin, actualizaAdmin, removeAdmin
}