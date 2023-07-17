

//metodo qu eme permite visualizar todos los clientes

const getUsuarios = () => {
    return db.query('select *from usuarios')
}

const getById = (usuarioId) => {
    return db.query(`select *from usuarios where id=?`, [usuarioId])
}


module.exports = {
    getUsuarios, getById
}