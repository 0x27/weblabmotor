var http = require('http');

//var sqlite3 = require('sqlite3').verbose();
 
//var db = new sqlite3.Database('mydb.db');
 
var check;
 
//var dados;

/*
db.serialize(function() {
  
 
  db.run("CREATE TABLE if not exists user_info (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
 
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM user_info", function(err, row) {
      //console.log(row.id + ": " + row.info)
      //console.log(JSON.stringify(row));
      dados = JSON.stringify(row);
  });
 
});

db.close();
*/

var arr = [ 'a', 'b', 'c'];
var aaa = JSON.stringify(arr);

var server = http.createServer(function(request, response) {

  response.writeHead(200, { 'Content-Type': 'application/json'});
  response.end(aaa);
  
});
 
server.listen(8080);
