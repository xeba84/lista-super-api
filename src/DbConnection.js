import mysql from 'promise-mysql';

var pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "ssanch",
    password: "Inicio00",
    database: "mandados"
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.log('Database connection was refused.');
        }
        if (connection) connection.release();
        return
    }
});

export { pool };
