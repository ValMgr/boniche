enum ErrorCodes {
  BASE = 'api.message.global.error',
  BAD_BODY = 'Invalid body request provided',
  BAD_QUERY = 'Invalid query request provided',
  NOT_ALLOWED = 'api.message.not_allow',
  NOT_FOUND = 'api.message.not_found',
  UNAUTHORIZED = 'api.message.unauthorized',
  BAD_ENCRYPTION = 'Bad encryption',
  NOT_PAID = 'Not Paid',
  NOT_FINISHED = 'Not finished',
  USER_NOT_FOUND = 'api.message.user.not_found',
}

export default ErrorCodes;