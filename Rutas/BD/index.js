const { Pool } = require('pg');

const pool = new Pool({
    host: 'ep-plain-block-58332573.us-east-2.aws.neon.fl0.io',
    port: '5432',
    user: 'fl0user',
    password: 'hzW4TBbUfMi9',
    database: 'Programacion',
    sslmode: 'require',
    ssl: { rejectUnauthorized: false }
});

pool.connect()
    .then(client => {
        console.log('Conexión exitosa a la base de datos');
        client.release();
    })
    .catch(error => {
        console.error('Error de conexión a la base de datos:', error);
    });

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
};