import 'dotenv/config';
import express, { Request, Response } from 'express';
import compression from 'compression';
import next from 'next';
import glob from 'glob';

import initDatabase from '@server/database';
import { shouldCompress } from '@server/middlewares/compression';
import config from '@server/constants/config';

const app = next({
  dev: config.isDev,
});

const handle = app.getRequestHandler();

const loadProject = () => {
  const models = glob.sync('src/**/models/*.ts');
  // eslint-disable-next-line
  models.forEach((file) => require(`${config.root}${file}`));
};

(async () => {
  await app.prepare();

  // @xxx wait next ready & check process env variables
  require('./env');

  await initDatabase();

  const server = express();

  try {
    // @xxx load models files
    loadProject();
  } catch (e) {
    if (e instanceof Error) {
      console.error(`[server error] ${e.message}`);
    }
  }

  server.use(
    compression({
      filter: shouldCompress,
    }),
  );

  server.all('*', (req: Request, res: Response) => handle(req, res));
  server.listen(config.port);

  console.info(`[server] ready on port ${config.port}`);
})();
