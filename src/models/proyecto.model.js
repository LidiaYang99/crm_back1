const getProyectos = () => {
    return db.query('select * from proyectos')
}

const getByProyectoioId = (proyectoId) => {
    return db.query('select * from proyectos where id = ?', [proyectoId])
}

const insertProyecto = ({ nombre, descripcion }) => {
    return db.query(
        'insert into proyectos (nombre, descripcion) values (?, ?)', [nombre, descripcion]
    )
}

const updateProyecto = (proyectoId, { nombre, descripcion }) => {
    return db.query(
        'update proyectos set nombre=?, descripcion=? where id=? ', [nombre, descripcion, proyectoId]
    )
}

const deleteProyecto = (proyectoId) => {
    return db.query(
        'delete from proyectos where id = ?', [proyectoId]
    )
}

module.exports = {
    getProyectos, getByProyectoioId, insertProyecto, updateProyecto, deleteProyecto
}