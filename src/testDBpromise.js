import mysql from 'promise-mysql';

const selectAll = (pass) => {
  return mysql.createConnection({
    host: "localhost",
    user: "ssanch",
    password: pass,
    database: "mandados"
  }).then((conn) => {
    var result = conn.query("SELECT * FROM productos;");
    conn.end();
    return result;    
  }).then(rows => {
    const products = rows.map((row) => { return {id: row.prod_id, nombre: row.prod_nombre} } );
    return products;
  }).then((list) => {
    return { answer: 0, message: "Process Done", description: "", content: list };
  }).catch((err) => {
    return { answer:1, message:err.code, description:err.sqlMessage, content:null };
  });
}

export { selectAll };