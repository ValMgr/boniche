import type { NextApiRequest, NextApiResponse } from 'next';

import { listServers } from '@docker/middlewares/containers';
import { handler, success, error } from '@app/services/api';
import { logger } from '@app/services/logger';

const listContainers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const containers = await listServers(req);
    return success(res)({ success: true, containers });
  } catch (e: any) {
    logger.error('GET /api/v1/docker/list', e?.message);
    return error(res, 500)({ error: e?.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  handler(
    req,
    res,
  )({
    GET: listContainers,
  });
