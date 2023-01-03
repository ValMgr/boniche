type MailConfig = {
  publicKey: string;
  privateKey: string;
  fromEmail: string;
  contactEmail: string;
  adminEmail: string;
};

type SessionConfig = {
  password: string;
  cookieName: string;
};


type CryptoConfig = {
  secret: string;
};


type DefaultConfig = {
  env: string;
  isDev: boolean;
  port: number;
  host: string;
  db: string;
  logDir: string;
  root: string;
  session: SessionConfig;
  crypto: CryptoConfig;
};

const env = process.env.NODE_ENV || 'development';

const mailjet: MailConfig = {
  publicKey: String(process.env.MAILJET_PUBLIC_KEY),
  privateKey: String(process.env.MAILJET_PRIVATE_KEY),
  fromEmail: String(process.env.MAILJET_FROM_EMAIL),
  contactEmail: String(process.env.MAILJET_CONTACT_EMAIL),
  adminEmail: String(process.env.ADMIN_MAIL),
};

const session: SessionConfig = {
  password: String(process.env.SESSION_PASSWORD),
  cookieName: String(process.env.SESSION_COOKIE_NAME),
};

const crypto: CryptoConfig = {
  secret: String(process.env.SECRET_ID),
};

const defaultConfig: DefaultConfig = {
  isDev: env === 'development',
  env: String(process.env.ENV_NAME || 'local'),
  port: Number(process.env.PORT) || 3000,
  host: String(process.env.HOST),
  db: String(process.env.MONGODB_URI),
  logDir: `${process.cwd()}/logs`,
  root: '../',
  session,
  crypto,
};

const config = {
  development: defaultConfig,
  production: defaultConfig,
  test: defaultConfig,
};

export default config[env];