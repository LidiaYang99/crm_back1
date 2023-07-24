const getUsers = () => {
    return db.query('select * from usuarios')
}

const getById = (usuarioId) => {
    return db.query('select * from usuarios where id=?', [usuarioId])
}

const insert = ({ nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento }) => {
    return db.query(
        'insert into usuarios (nombre, apellidos, dni, email, password, telefono, fecha_alta, estado,departamento) values (?, ?, ?, ?, ?, ?, ?, ?,?)',
        [nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento]
    );
}

const updateUser = (usuarioId, { nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento }) => {
    return db.query(
        'update usuarios set nombre=?, apellidos=?, dni=?, email=?, password=?, telefono=?, fecha_alta=?, estado=?,departamento=? where id=?',
        [nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento, usuarioId]
    );

}

const remove = (usuarioId) => {
    return db.query(
        'delete from usuarios where id = ?', [usuarioId]
    )
}

// const getHour = (usuarioId, fecha) => {
//     return db.query('select up.fecha as "fecha", u.nombre, u.apellidos, p.nombre as "proyecto", sum(up.horas_dedicadas) from usuarios as u, proyectos as p, usuarios_has_proyectos as up where u.id= up.Usuarios_id and p.id=up.proyectos_id and up.Usuarios_id=? and up.fecha= ? group by p.nombre, u.nombre , u.apellidos, up.fecha', [usuarioId, fecha])
// }

const getHour = (usuarioId, fecha) => {
    return db.query('select up.fecha as "fecha", u.nombre, u.apellidos, p.nombre as "proyecto", sum(up.horas_dedicadas) as horas from usuarios as u, proyectos as p, usuarios_has_proyectos as up where u.id= up.Usuarios_id and p.id=up.proyectos_id and up.Usuarios_id=? and up.fecha= ? group by p.nombre, u.nombre , u.apellidos, up.fecha', [usuarioId, fecha])
}
const getByEmailUser = (email) => {
    return db.query('select * from Usuarios where email = ?', [email]);
}


const registerHour = ({ usuario_id, proyecto_id, horas_dedicadas, fecha }) => {
    return db.query('INSERT INTO mydb.Usuarios_has_proyectos (Usuarios_id, proyectos_id, horas_dedicadas, fecha) VALUES (?, ?, ?, ?)', [usuario_id, proyecto_id, horas_dedicadas, fecha]);
};

const insertHour = (usuarios_id, proyectos_id, hora_entrada, hora_salida, fecha) => {
    console.log('id', usuarios_id, 'proyecto_id', proyectos_id, 'entrada', hora_entrada, 'salida', hora_salida, 'fecha', fecha)

    return db.query(`INSERT INTO usuarios_has_proyectos (usuarios_id, proyectos_id, horas_dedicadas,hora_entrada,hora_salida,fecha) VALUES (${usuarios_id}, ${proyectos_id}, ROUND((TIME_TO_SEC('${hora_salida}') - TIME_TO_SEC('${hora_entrada}'))/3600, 2),'${hora_entrada}','${hora_salida}','${fecha}')`)

}



module.exports = {
    getUsers, getById, insert, updateUser, remove, getHour, registerHour, getByEmailUser, insertHour
}

