import Joi from 'joi';

const REQUIRED = Joi.string().required();

const envSchema = Joi.object()
  .keys({
    // App
    PORT: REQUIRED,
    HOST: REQUIRED,
    // MongoDB
    MONGODB_URI: REQUIRED,
  })
  .unknown();

try {
  Joi.attempt(process.env, envSchema);
} catch (e) {
  if (e instanceof Error) {
    throw new Error(e.message);
  }
}
