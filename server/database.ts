import mongoose from 'mongoose';

import config from '@server/constants/config';

const { db: mongoUri } = config;

export default async () => {
  mongoose.connect(mongoUri);

  const db = mongoose.connection;

  db.on('error', () => {
    throw new Error(`❌ Unable to connect to database at ${mongoUri} ❗️`);
  });
};
