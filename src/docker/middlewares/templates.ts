import { NextApiRequest } from 'next';
import fs from 'fs';

import config from '@server/constants/config';

export const getTemplates = async (req: NextApiRequest) => {
  const templates = fs.readdirSync(config.template_path);

  return templates;
};
