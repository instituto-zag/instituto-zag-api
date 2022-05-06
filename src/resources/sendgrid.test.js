const sendgrid = require('@sendgrid/mail');
const ENV = require('../environment')();
const sendgridResource = require('./sendgrid');

describe('Sendgrid Resource', () => {
  beforeEach(() => {
    sendgrid.send = jest.fn(() => Promise.resolve());
    sendgrid.setApiKey = jest.fn();
  });

  it('should send an email to the recipient', () => {
    const data = {
      name: 'Fernando',
      email: 'fernando@email.com',
      message: 'Testando'
    };
    sendgridResource.send(data);
    expect(sendgrid.setApiKey).toHaveBeenCalledWith(ENV.MAILER.TOKEN);
    expect(sendgrid.send).toHaveBeenCalledWith({
      to: 'institutozagweb@gmail.com',
      from: `Instituto Zag Website <institutozagweb@gmail.com>`,
      replyTo: `Fernando <fernando@email.com>`,
      subject: `Novo contato enviado por Fernando`,
      text: 'Testando'
    });
  });

  it('should send an auto-response to the sender', () => {
    const data = {
      name: 'Fernando',
      email: 'fernando@email.com',
      message: 'Testando'
    };
    sendgridResource.send(data)
    expect(sendgrid.send).toHaveBeenCalledWith({
      to: 'fernando@email.com',
      from: `Instituto Zag <institutozagweb@gmail.com>`,
      replyTo: `Instituto Zag <institutozagweb@gmail.com>`,
      subject: `Obrigado pelo contato, Fernando!`,
      html: `<p>Olá, Fernando!</p>
<p>
Acabamos de receber o seu contato e responderemos em breve.<br>
Abaixo, você pode revisar a mensagem que acabou de nos enviar:
</p>
<p><i>Testando</i></p>
<p>Atenciosamente,<br>
Instituto Zag</p>
`
    });
  });
});
