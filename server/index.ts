import express from 'express';
import next from 'next';
import fs from 'fs';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

import moviesData from './data.json';

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.use(express.json());

    server.get('/api/v1/movies', (req, res) => {
      return res.json(moviesData);
    });

    server.get('/api/v1/movies/:id', (req, res) => {
      const { id } = req.params;
      const movie = moviesData.find(movie => movie.id === id);
      return res.json(movie); 
    }); 

    server.post('/api/v1/movies', (req, res) => {
      const { movieForm } = req.body;

      const movie = {
        ...movieForm, 
        rating: parseInt(movieForm.rating),
        genre: movieForm.genre.join(', '),
        id: Math.random().toString(36).substr(2,7),
        releaseYear: 3000,
      };

      moviesData.push(movie);

      const pathToFile = path.join(__dirname, './data.json');
      const stringifiedData = JSON.stringify(moviesData, null ,2);

      fs.writeFile(pathToFile, stringifiedData, error => {
        if (error) {
          return res.status(422).send(error);
        }
        return res.json('Movie was successfully added');
      });
    });

    server.delete('/api/v1/movies/:id', (req, res) => {
      const { id } = req.params;

      const movieIndex = moviesData.findIndex(movie => movie.id === id);
      moviesData.splice(movieIndex, 1);
      
      const pathToFile = path.join(__dirname, './data.json');
      const stringifiedData = JSON.stringify(moviesData, null, 2);

      fs.writeFile(pathToFile, stringifiedData, error => {
        if (error) {
          return res.status(422).send(error);
        }
        return res.json('Movie was successfully deleted');
      });
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

    server.all('*', (req, res) => {
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