import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { handler, success, error } from '@app/services/api';
import { ps } from 'docker-compose';
import { logger } from '@app/services/logger';

type Data = {
  cwd: string;
};

const listContainers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { p } = req.query;

  if (!p || p === '') {
    logger.error('GET /api/v1/docker/start', 'No path provided');
    return error(res, 400)({ error: 'No path provided' });
  }

  const _path = path.join(path.resolve('./'), '/server/docker-manager/', p as string);

  try {
    const containers = await ps({ cwd: _path });
    return success(res)({ success: true, containers });
  } catch (e: any) {
    logger.error('GET /api/v1/docker/list', e?.message);
    return error(res, 500)({ error: e?.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) =>
  handler(
    req,
    res,
  )({
    GET: listContainers,
  });
