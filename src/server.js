const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser')
const server = express()
const log4js = require('log4js')
const cors = require('cors')
const port = 8001

server.use(cors());

log4js.configure({
    appenders: {
        access: { type: 'console' }
      },
      categories: {
        default: { appenders: ['access'], level: 'info' }
      }
});
const accessLogger = log4js.getLogger('access');
server.use(log4js.connectLogger(accessLogger));

// ssl support
// const sslOptions = {
//     key: fs.readFileSync('cert/server.key'),
//     cert: fs.readFileSync('cert/server.crt')
//   }
// create certificates(Terminal)
// $ cd cert
// $ openssl genrsa -aes128 2048 > server.key
// $ openssl req -new -key server.key > server.csr
// $ openssl x509 -in server.csr -days 365000 -req -signkey server.key > server.crt

const readJson = (filePath) => {
    return new Promise(resolve => {
      fs.readFile(filePath, (err, data) => {
        resolve(JSON.parse(data))
      })
    })
  }

server.get ('/v1/telemetory', (req, res) => {
    readJson('db/data.json').then(data => { res.json(data) })
});

console.log('method | endpoint')
for (let v of server._router.stack) {
  if (v.route && v.route.path){
    let path = v.route.path
    let method = v.route.stack[0].method.toUpperCase()
    console.log(method + ' | '+ path);
  }
}
console.log();

// https.createServer (sslOptions, server).listen(port, () => {
//     console.log('api server started on port ' + port)
//   });
server.listen(port,() => {
    console.log('started on port ' + port);
});