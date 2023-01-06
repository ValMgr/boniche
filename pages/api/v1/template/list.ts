import type { NextApiRequest, NextApiResponse } from 'next';

import { getTemplates } from '@docker/middlewares/templates';
import { handler, success, error } from '@app/services/api';
import { logger } from '@app/services/logger';

const availableComposer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const templates = await getTemplates(req);
    return success(res)({templates});
  } catch (e: any) {
    logger.error('GET /api/v1/docker/available', e?.message);
    return error(res, 500)({ error: e?.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  handler(
    req,
    res,
  )({
    GET: availableComposer,
  });
