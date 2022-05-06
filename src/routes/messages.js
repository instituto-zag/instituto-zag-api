const refusalService = require('../services/refusal');
const messagesController = require('../controllers/messages');

const _public = {};

_public.init = router => {
  router.get('/messages/:messageId', refusalService.refuse);
  router.post('/messages', messagesController.send);
  router.put('/messages/:messageId', refusalService.refuse);
  router.delete('/messages/:messageId', refusalService.refuse);
};

module.exports = _public;
