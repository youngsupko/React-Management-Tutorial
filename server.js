const fs = require('fs');
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

// 데이터베이스 설정 파일 로드 및 파싱
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

// 데이터베이스 실제 연결 실행
connection.connect();

// 요청 본문(Body) 데이터 처리를 위한 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 고객 전체 목록을 조회하는 API 엔드포인트
app.get('/api/customers', (req, res) => {
    const sql = "SELECT * FROM CUSTOMER";
    
    connection.query(sql, (err, rows) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            return res.status(500).send(err);
        }
        res.send(rows);
    });
});

// 설정된 포트에서 서버 실행 대기
app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 구동 중입니다.`);
});

