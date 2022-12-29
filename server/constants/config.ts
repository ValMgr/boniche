type DefaultConfig = {
  isDev: boolean;
  port: number;
  host: string;
  db: string;
  root: string;
};

const env = process.env.NODE_ENV || 'development';

const defaultConfig: DefaultConfig = {
  isDev: env === 'development',
  port: Number(process.env.PORT) || 3000,
  host: String(process.env.HOST),
  db: String(process.env.MONGODB_URI),
  root: '../',
};

const config = {
  development: defaultConfig,
  production: defaultConfig,
  test: defaultConfig,
};

export default config[env];
