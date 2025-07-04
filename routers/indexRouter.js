
const { Router } = require('express');
const indexRouter = Router();
const controller = require('../controllers/controller');

// sample messages
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];

indexRouter.get('/', controller.getMessages);

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.post('/new', controller.addMessage);

module.exports = indexRouter;
