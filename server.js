const express = require('express');
// const bodyParser = require('body-parser'); // 이제 필요 없습니다.
const app = express();
const port = process.env.PORT || 5000;

// express 내장 미들웨어 사용 (오타 jason -> json 수정)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
