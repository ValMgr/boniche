import Logger from 'logplease';

import config from '@app/constants/config';

const API_FILE = config.isDev ? null : `${config.logDir}/api.log`;
export const logger = Logger.create('api', { filename: API_FILE });

const WEB_FILE = config.isDev ? null : `${config.logDir}/web.log`;
export const webLogger = Logger.create('web', { filename: WEB_FILE });
