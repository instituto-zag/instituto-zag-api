const APP_PORT = 9001

module.exports = {
  APP: {
    BASE_URL: `http://localhost:${APP_PORT}`,
    PORT: APP_PORT,
    SERVER_START_LOG_MESSAGE: `
Running application on http://localhost:${APP_PORT}.
Access chrome://inspect to debug your code.
Press Cmd+C to stop.
`
  },
  MAILER: {
    MAILER_SENDER_NAME: 'Instituto Zag Website',
    AUTO_RESPONSE_SENDER_NAME: 'Instituto Zag',
    RECIPIENT: 'institutozagweb@gmail.com',
    TOKEN: ''
  }
};
