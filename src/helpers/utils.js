const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        userId: user.id,
        user_rol: user.rol,
        exp: dayjs().add(15, 'days').unix()
    }

    return jwt.sign(obj, 'Hola carola');
};

module.exports = {
    createToken
}