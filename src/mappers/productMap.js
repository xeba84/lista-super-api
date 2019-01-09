import { pool as Connection } from './../DbConnection';
import { Product } from './../entities/productEnt';
import { createOkAnswer, createErrorAnswer } from './../entities/answerEnt';
import { answerCode } from './../constants/answerCode';

const getAll = () => {
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
  return getByName(product).then(prodR => {
    if (prodR.count > 0) {
      return getByUser(user).then(userR => {
        if (userR.count > 0) {
          //El producto existe y está asociado al usuario
          return { id: userR[0].prod_id, enabled: userR[0].enabled, isBase: prodR[0].base };
        } else {
          //El producto existe, pero no está asociado al usuario
          return { id: userR[0].prod_id, enabled: null, isBase: prodR[0].base };
        }
      })
    } else {
      //NO existe el producto
      return { id: -1, enabled: null, isBase: null };
    }
  }).then(prodUser => {
    console.log(prodUser);
    return insert({ name: product.name, code: user.code }).then(id => { return id });
  }).catch(err => {
    console.log(err);
  })
}

const insert = (prodUser) => {
  return Connection.getConnection()
    .then((conn) => { 
      //console.log(conn);
      conn.beginTransaction().
      then(() => {
        console.log(conn);
        conn.rollback();
      })
    });

    /*
        console.log(conn);
        return conn.query("INSERT INTO products(prod_name, base) VALUES (?,?)", [prodUser.name, false])
          .then(result => {
            return { conn, id: result.insertId }
          })
    })
    ).then((conn, id) => {
      console.log("ID:" + id);
      conn.commit();
      return id;
    });
    */
}
/* 
}).then((conn, id) => {
  return conn.query("INSERT INTO user_prod(user_code, prod_id, enabled) VALUES (?,?,?)", [prodUser.code, id.insertId, true]).then(() => {
    return {conn, id}
  })
}).then((conn, id) => {
  console.log(r);    
  conn.commit();
  return id;
}).catch(conn, err => {
  err.conn.rollback();
  throw err;
})
*/

const getByName = (product) => {
  return Connection.query("SELECT * FROM products WHERE UPPER(prod_name)=UPPER(?)", [product.name])
    .then(rows => {
      return rows;
    });
}

const getById = (product) => {
  return Connection.query("SELECT * FROM products WHERE prod_id=?", [product.id])
    .then(rows => {
      return rows;
    });
}

const getByUser = (user) => {
  return Connection.query("SELECT * FROM user_prod WHERE UPPER(user_code)=UPPER(?)", [user.code])
    .then(rows => {
      return rows;
    });
}

export { getAll, remove, add, insert };