var express = require('express');
var bodyParser = require('body-parser');

import { getAll as getAllProducts } from './../mappers/productMap';

var mandadosServer = express();
mandadosServer.use(bodyParser.json());
mandadosServer.use(bodyParser.urlencoded({ extended: true }));

mandadosServer.get('/Products', (req, res) =>
    getAllProducts().then(products => {
        res.status(200).send({answer: products})
}));

mandadosServer.get('*', (req, res) => res.status(200).send({
    message: 'Bienvenido a la API de Mandados :).',
}));

export { mandadosServer };