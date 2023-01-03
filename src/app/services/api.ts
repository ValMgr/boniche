/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

import ErrorCodes from '@app/constants/error-codes';

export type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type Endpoints = {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => void;
};

export const success =
  (res: NextApiResponse, code = 200) =>
  (data: Record<string, any> = {}): void =>
    res.status(code).json({
      success: true,
      data,
    });

export const error =
  (res: NextApiResponse, code = 400) =>
  (data: Record<string, any> = {}): void =>
    res.status(code).json({
      success: false,
      data,
    });

export const handler =
  (req: NextApiRequest, res: NextApiResponse) =>
  (endpoints: Endpoints): void => {
    const { method } = req;

    if (method && method.toUpperCase() in endpoints) {
      return endpoints[method](req, res);
    }

    return error(res, 405)({ message: ErrorCodes.NOT_ALLOWED });
  };

export const serialize = (value: Record<string, any>): Record<string, any> => {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    throw new TypeError(e?.message || 'serialize error');
  }
};

/* eslint-enable @typescript-eslint/no-explicit-any */
