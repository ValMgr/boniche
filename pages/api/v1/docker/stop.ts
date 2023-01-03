import type { NextApiRequest, NextApiResponse } from 'next';

import { handler, success, error } from '@app/services/api';
import { down } from 'docker-compose';
import { logger } from '@app/services/logger';
import path from 'path';

type Data = {
  cwd: string;
};

const downComposer = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { p } = req.query;

  if (!p || p === '') {
    logger.error('GET /api/v1/docker/start', 'No path provided');
    return error(res, 400)({ error: 'No path provided' });
  }

  const _path = path.join(path.resolve('./'), '/server/docker-manager/', p as string);

  await down({
    cwd: _path,
    log: true,
  })
    .then(() => success(res)({ success: true, message: 'Composer is down' }))
    .catch((e: any) => {
      logger.error('GET /api/v1/docker/start', e?.message);
      error(res, 500)({ error: e?.message });
    });
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) =>
  handler(
    req,
    res,
  )({
    GET: downComposer,
  });
