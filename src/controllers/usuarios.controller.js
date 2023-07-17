const Usuario = require("../models/usuario.model")

const getAll = async (req, res) => {
    try {
        const [usuarios] =
            await Usuario.getUsuarios()
        res.json(usuarios)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getUsuario = async (req, res) => {
    try {
        const [usuarios] = await Usuario.getById(req.params.usuarioId);
        if (usuarios.lenght === 0) {
            return res.json({ fatal: 'no existe un usuario con ese id ' })
        }
        res.json(usuarios[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


module.exports = {
    getAll, getUsuario
}