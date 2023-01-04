import { NextApiRequest } from 'next';
import { upAll, down, rm, ps, TypedDockerComposeResult, DockerComposePsResult } from 'docker-compose';
import { join } from 'path';

import config from '@server/constants/config';

export const startServer = async (req: NextApiRequest): Promise<{ status: string }> => {
  const { path } = req.query;

  if (!path || path === '') {
    throw new Error('No path provided');
  }

  await upAll({ cwd: join(config.docker_path, path as string), log: true });

  return { status: 'Server is up' };
};

export const stopServer = async (req: NextApiRequest): Promise<{ status: string }> => {
  const { path } = req.query;

  if (!path || path === '') {
    throw new Error('No path provided');
  }

  await down({ cwd: join(config.docker_path, path as string), log: true });
  await rm({ cwd: join(config.docker_path, path as string) });

  return { status: 'Server is down and removed' };
};

export const listServers = async (req: NextApiRequest): Promise<TypedDockerComposeResult<DockerComposePsResult>> => {
  const { path } = req.query;

  if (!path || path === '') {
    throw new Error('No path provided');
  }

  const containers = await ps({ cwd: join(config.docker_path, path as string) });

  return containers;
};
