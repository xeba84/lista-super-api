var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ssanch",
  password: "Inicio0o",
  database: "mandados"
});

const selectAll = (funcSetResult) => {
  let res = {answer: -1, message:"NOT SET", description:"Empty", content:null };
  con.connect(function(err) {
    //if (err) throw err;
    //con.query("SELECT * FROM productos", function (err, result, fields) {
      //if (err) throw err;
      //console.log(result);
      //console.log(fields);
      //return(result);
    if (!err) {
        con.query("SELECT * FROM productos", function (err, result) {      
          if (err)
            funcSetResult({ answer:1, message:err.code, description:err.sqlMessage, content:null });
          else
            funcSetResult({answer:0, message:"Process Done", description:"", content:result });
      });
    } else {
      funcSetResult({ answer:2, message:err.code, description:err.sqlMessage, content:null });
    }
  });
  return res;
}

export { selectAll };