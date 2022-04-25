const detail = require('./index')

let tartaruga = new detail ("Tartaruga", 2);
let lebre = new detail ("Lebre", 10);

tartaruga.inicio();
tartaruga.andou();
lebre.pulou();
tartaruga.continuou();
lebre.retornou();
lebre.fim();

//console.log(JSON.stringify(tartaruga));
//console.log(JSON.stringify(lebre));