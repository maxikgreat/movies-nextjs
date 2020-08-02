import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.get('/api/v1/movies', (req, res) => {
      res.json('hello world');
    });

    server.post('/api/v1/movies', (req, res) => {
      res.json('Save movie');
    });

    server.patch('/api/v1/movies/:id', (req, res) => {
      const { id } = req.params;
      res.json(`Update movie by ${id}`);
    });

    server.delete('/api/v1/movies/:id', (req, res) => {
      const { id } = req.params;
      res.json(`Delete movie by ${id}`);
    });

    server.get('/faq', (req, res) => {
      res.send(`
        <html>
          <head>
          </head>
          <body>
            <h1>Hello world html</h1>
          </body>
        </html>
      `);
    })

    server.all("*", (req, res) => {
      // next js is handling these requests 
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();