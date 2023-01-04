import path from 'path';

type DefaultConfig = {
  isDev: boolean;
  port: number;
  host: string;
  db: string;
  root: string;
  docker_path: string;
  template_path: string;
};

const env = process.env.NODE_ENV || 'development';

const defaultConfig: DefaultConfig = {
  isDev: env === 'development',
  port: Number(process.env.PORT) || 3000,
  host: String(process.env.HOST),
  db: String(process.env.MONGODB_URI),
  root: '../',
  docker_path: path.join(path.resolve('./'), String(process.env.DOCKER_PATH)),
  template_path: path.join(path.resolve('./'), String(process.env.TEMPLATES_PATH)),
};

const config = {
  development: defaultConfig,
  production: defaultConfig,
  test: defaultConfig,
};

export default config[env];
