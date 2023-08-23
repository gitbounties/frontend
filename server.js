const { createServer: createHttpsServer } = require('https');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = createHttpsServer(
      {
        key: fs.readFileSync('./certs/key.pem'),
        cert: fs.readFileSync('./certs/cert.pem'),
      },
      (req, res) => handle(req, res)
    );

    return server.listen(PORT, (err) => {
      if (err) throw err;
    });
  })
  .catch((err) => {
    console.error(err);
  });
