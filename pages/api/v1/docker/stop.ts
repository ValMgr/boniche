import type { NextApiRequest, NextApiResponse } from 'next';

import { stopServer } from '@docker/middlewares/containers';
import { handler, success, error } from '@app/services/api';
import { logger } from '@app/services/logger';

const downComposer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const server = await stopServer(req);
    return success(res)({ success: true, server });
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
    GET: downComposer,
  });
