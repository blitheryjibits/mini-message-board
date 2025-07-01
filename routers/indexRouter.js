
const { Router } = require('express');
const indexRouter = Router();

// sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get('/', (req, res) => {
  res.render('indexTemplate', { messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.post('/new', (req, res) => {
  const { userInput, messageInput } = req.body;

  messages.push({
    user: userInput,
    text: messageInput,
    added: new Date()
  });
  
  res.redirect('/');
});

module.exports = indexRouter;
