// import { selectAll } from './testDB';
// //const selectAll = require('./testDB');

// const setResult = (result) => {
//     console.log("setResult!");
//     console.log(result)
// }
// selectAll(setResult);

//---------------------------------------------------
// import { selectAll } from './testDBpromise';

// const passOk = "Inicio00";
// // const passErr = "XXXX";

// console.log(process.env.PORT);

// selectAll(passOk).then(res => console.log(res));
// // selectAll(passErr).then(res => console.log(res));

//---------------------------------------------------
// import { selectAll } from './mappers/productMap';
// //console.log(selectAll());
// selectAll().then(res => console.log(res));

//---------------------------------------------------
import { mandadosServer } from './services/index';

mandadosServer.listen(process.env.PORT, function(oReq, oRes) {
    console.log("Servicios web Activo en puerto " + process.env.PORT);
});