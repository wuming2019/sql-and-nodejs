const fs = require('fs');

// 下载引入mysql模块
const mysql = require('mysql');

module.exports = {
  getAllHero,getHeroById,writeFile,deleteHeroById,addNewHero
};

let conn = mysql.createConnection({
  host : '127.0.0.1',
  port : 3306,
  user : 'root',
  password : 'root',
  database : 'gz35'
});

function getAllHero(callback){
  // fs.readFile('./data/heros.json','utf-8',(err,data)=>{
  //   if(err) console.log(err);
  //   let arr = JSON.parse(data);
  //   callback(arr);
  // })
  let sql = `SELECT * FROM heros WHERE isdelete = 0`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  });
}

function getHeroById(id,callback){
  this.getAllHero((arr)=>{
    let target = arr.find(e=>{
      return e.id == id;
    });
    callback(target);
  })
}

function addNewHero(data,callback){
  let sql = `INSERT INTO heros SET \`img\`='${data.img}',\`name\`='${data.name}',\`gender\`='${data.gender}'`;
  // 执行
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  });
}

function writeFile(arr){
  let content = JSON.stringify(arr);
  fs.writeFile('./data/heros.json',content,'utf-8',err=>{
    if(err) {
      console.log(err);
    }
  })
}

// 删除
function deleteHeroById(id,callback){
  let sql = `UPDATE heros SET isDelete = 1 WHERE id = ${id}`;
  conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
  });
}
