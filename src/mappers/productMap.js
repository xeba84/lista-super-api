import { pool as Connection } from './../DbConnection';
import { Product } from './../entities/productEnt';
import { createOkAnswer, createErrorAnswer } from './../entities/answerEnt';
import { answerCode } from './../constants/answerCode';

const getAll = (user) => {
  return Connection.query("SELECT * FROM products;")
  .then(result => {
    return result;
  }).then(rows => {
    return rows.map((row) => { return new Product(row.prod_id, row.prod_name) });
  }).then((list) => {
    return createOkAnswer(list);
  }).catch((err) => {
    console.log(err);
    return createErrorAnswer(err.code, err.sqlMessage, answerCode.DB_ERROR);
  });
}

const remove = (product, user) => {
}

const add = (product, user) => {

}

export { getAll, remove, add };