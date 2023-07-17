const AdminModel = require('../models/admin.model')

const getAllAdmin = async (req, res) => {
    const [usuarios] = await AdminModel.getAdmin();
    res.json(usuarios)
}


const postNewAdmin = async (req, res) => {
    const [result] = await AdminModel.insertAdmin(req.body);
    const [proyecto] = await AdminModel.getByAdminId(result.insertId);
    res.json(proyecto)
}

const actualizaAdmin = async (req, res) => {
    const { adminId } = req.params
    const [result] = await AdminModel.updateById(adminId, req.body);
    res.json(result);
}


const removeAdmin = async (req, res) => {
    const { adinIdm } = req.params
    const [deletedOne] = await AdminModel.deleteAdmin(adinIdm);
    res.json(deletedOne)
}

module.exports = {
    getAllAdmin, postNewAdmin, actualizaAdmin, removeAdmin
}