var express = require('express')
var sqlQuery = require('./db')

var app = express()

app.get('/',(req,res)=>{
    res.send('这是一个答题api服务器')
})

app.get('/api/rtimu/:page',async (req,res)=>{
    // 随机获取十个题目
    var page = Number(req.params.page)
    if(Number.isNaN(page)) {
        page = 1
    }

    sqlQuery.query(`SELECT * FROM quizzes limit ${page-1},10`,[],(result)=>{
        res.send(result)
    })
})

app.listen(8080,()=>{
    console.log('server start','http://localhost:8080/');
})