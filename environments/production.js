const APP_BASE_URL = 'https://institutozagapi.herokuapp.com'

module.exports = {
  APP: {
    BASE_URL: APP_BASE_URL,
    PORT: 80,
    SERVER_START_LOG_MESSAGE: `
Running application on ${APP_BASE_URL}.
Press Cmd+C to stop.
`
  },
  MAILER: {
    MAILER_SENDER_NAME: 'Instituto Zag Website',
    AUTO_RESPONSE_SENDER_NAME: 'Instituto Zag',
    RECIPIENT: 'institutozag@gmail.com',
    TOKEN: process.env.MAILER_TOKEN
  }
};
