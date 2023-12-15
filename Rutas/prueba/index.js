const database = require('../BD');
module.exports.Listar = async(req, res) => {
    try {
        const respuesta = await database.query('SELECT * FROM usuario');
        res.json(respuesta.rows)
    } catch (error) {
        return res.status(500).json({ message: "Lo sentimos no hubo resutado" });
    }
}