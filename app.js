const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routers/indexRouter');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
