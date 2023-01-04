// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  version: string;
  title: string;
  status: 'Development' | 'Production';
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({ version: 'v0.1.0', title: 'Boniche Server Manager ®', status: 'Development' });
}
