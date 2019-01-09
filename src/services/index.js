var express = require('express');
var bodyParser = require('body-parser');
import { Product } from './../entities/productEnt';
import { User } from '../entities/userEnt';

import { getAll as getAllProducts, 
    add as addProduct, 
    insert as Insert} from './../mappers/productMap';


var mandadosServer = express();
mandadosServer.use(bodyParser.json());
mandadosServer.use(bodyParser.urlencoded({ extended: true }));

mandadosServer.get('/Products', (req, res) =>
    getAllProducts().then(products => {
        res.status(200).send({answer: products})
}));

mandadosServer.post('/Product/Add', (req, res) => { 
    console.log("Producto..");
    console.log(req.body);
    // let p = new Product(req.body.id, req.body.nme);
    // console.log(p);
    // p.id++;    
    // res.status(200).send(p);
    
    //
    let p = new Product(-1, req.body.Product.name);
    let u = new User(req.body.User.code);
    //addProduct(p, u).then(rta => res.status(200).send({answer: rta}));
    Insert({name: p.name, code: u.code})
    .then((id) => { 
        res.status(200).send({id}) 
    });
});

mandadosServer.get('*', (req, res) => res.status(200).send({
    message: 'Bienvenido a la API de Mandados :).',
}));

export { mandadosServer };