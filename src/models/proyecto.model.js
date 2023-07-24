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

const getMonth = (usuarioId, proyectoId, mes) => {
    return db.query(
        'select up.horas_dedicadas, up.fecha, p.nombre from mydb.usuarios_has_proyectos as up, proyectos as p  where p.id=up.proyectos_id and Usuarios_id=? and proyectos_id=? and month(fecha)=? ', [usuarioId, proyectoId, mes]
    )
}




module.exports = {
    getProyectos, getByProyectoioId, insertProyecto, updateProyecto, deleteProyecto, getMonth
}