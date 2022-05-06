const sendgrid = require('@sendgrid/mail');
const ENV = require('../environment')();

const _public = {};

_public.send = data => {
  sendgrid.setApiKey(ENV.MAILER.TOKEN);
  return Promise.all(buildEmails(data).map(email => sendgrid.send(email)));
};

function buildEmails(data){
  return [
    formatIncomingMessage(data),
    formatAutoResponseMessage(data)
  ];
}

function formatIncomingMessage(data){
  return {
    to: ENV.MAILER.RECIPIENT,
    from: `${ENV.MAILER.MAILER_SENDER_NAME} <${ENV.MAILER.RECIPIENT}>`,
    replyTo: `${data.name} <${data.email}>`,
    subject: `Novo contato enviado por ${data.name}`,
    text: data.message
  }
}

function formatAutoResponseMessage(data, PROJECT){
  return {
    to: data.email,
    from: `${ENV.MAILER.AUTO_RESPONSE_SENDER_NAME} <${ENV.MAILER.RECIPIENT}>`,
    replyTo: `${ENV.MAILER.AUTO_RESPONSE_SENDER_NAME} <${ENV.MAILER.RECIPIENT}>`,
    subject: `Obrigado pelo contato, ${data.name}!`,
    html: `<p>Olá, ${data.name}!</p>
<p>
Acabamos de receber o seu contato e responderemos em breve.<br>
Abaixo, você pode revisar a mensagem que acabou de nos enviar:
</p>
<p><i>${data.message}</i></p>
<p>Atenciosamente,<br>
${ENV.MAILER.AUTO_RESPONSE_SENDER_NAME}</p>
`
  }
}

module.exports = _public;
