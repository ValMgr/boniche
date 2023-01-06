import type { NextApiRequest, NextApiResponse } from 'next';

import { startServer } from '@docker/middlewares/containers';
import { handler, success, error } from '@app/services/api';
import { logger } from '@app/services/logger';

const upComposer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const status = await startServer(req);
    return success(res)({ status });
  } catch (e: any) {
    logger.error('GET /api/v1/docker/start', e?.message);
    return error(res, 500)({ error: e?.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  handler(
    req,
    res,
  )({
    GET: upComposer,
  });
