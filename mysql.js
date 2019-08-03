const mysql = require('mysql');

let conn = mysql.createConnection({
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'gz35',
});

conn.connect();

let sql = `UPDATE heros SET isdelete = 1 WHERE id = 4`;

conn.query(sql,(err,result,filed)=>{
    if(err) console.log(err);
    console.log(result);
    console.log(filed);
});

conn.end();