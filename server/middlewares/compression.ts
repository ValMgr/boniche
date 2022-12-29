import compression from 'compression';
import { Request, Response } from 'express';

export const shouldCompress = (req: Request, res: Response) => {
  // don't compress responses asking explicitly not
  if (req.headers['x-no-compression']) {
    return false;
  }

  // use compression filter function
  return compression.filter(req, res);
};
