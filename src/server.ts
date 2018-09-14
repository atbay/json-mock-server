import app from './app';
// import * as https from 'https';
// import * as fs from 'fs';
const PORT = 8001;

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

// https.createServer(httpsOptions, app).listen(PORT, () => {
//     console.log(`Express server listening on port ${PORT}`);
// });

// start
app.listen(PORT, () => {
    console.log(`started on port ${PORT}`);
});
