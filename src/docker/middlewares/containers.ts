import { NextApiRequest } from 'next';
import { upAll, down, rm, ps, TypedDockerComposeResult, DockerComposePsResult } from 'docker-compose';
import { join } from 'path';
import fs from 'fs';

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

  return { status: 'Server is down' };
};

export const listServers = async (req: NextApiRequest): Promise<TypedDockerComposeResult<DockerComposePsResult>> => {
  const { path } = req.query;

  if (!path || path === '') {
    throw new Error('No path provided');
  }

  const containers = await ps({ cwd: join(config.docker_path, path as string) });

  return containers;
};

export const createServer = async (req: NextApiRequest): Promise<{ status: string }> => {
  const { name, template } = req.body;

  if (!name || name === '') {
    throw new Error('No name provided');
  }

  if (!template || template === '') {
    throw new Error('No template provided');
  }

  fs.mkdirSync(join(config.docker_path, name));
  fs.copyFileSync(join(config.template_path, template), join(config.docker_path, name, 'docker-compose.yml'));
  await upAll({ cwd: join(config.docker_path, name), log: true });

  return { status: 'Server is up' };
};

export const deleteServer = async (req: NextApiRequest): Promise<{ status: string }> => {
  const { path } = req.query;

  if (!path || path === '') {
    throw new Error('No path provided');
  }

  await down({ cwd: join(config.docker_path, path as string), log: true });
  await rm({ cwd: join(config.docker_path, path as string), log: true });
  fs.rmdirSync(join(config.docker_path, path as string), { recursive: true });

  return { status: 'Server is deleted' };
};
