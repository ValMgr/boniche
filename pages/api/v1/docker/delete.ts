import type { NextApiRequest, NextApiResponse } from 'next';

import { createServer, deleteServer } from '@docker/middlewares/containers';
import { handler, success, error } from '@app/services/api';
import { logger } from '@app/services/logger';

const createAndStartServer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const status = await deleteServer(req);
    success(res)({ status });
  } catch (e: any) {
    logger.error('GET /api/v1/docker/stop', e?.message);
    error(res, 500)({ error: e?.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  handler(
    req,
    res,
  )({
    POST: createAndStartServer,
  });
