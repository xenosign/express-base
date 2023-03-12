const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));

const mainRouter = require('./routes');
const userRouter = require('./routes/users');

app.use('/', mainRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다!`);
});
