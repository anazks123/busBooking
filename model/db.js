
var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"busticket"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=db;






// var mysql = require('mysql');

// var config = {
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'busticket'
// };
// function getConnection(callback){
// 	connection = mysql.createConnection(config);
// 	connection.connect(function(err){
// 		if(err){
// 			console.log(err.stack);
// 		}else{
// 			callback(connection);
// 			console.log("conneted",connection)
// 		}
// 	});



// }

// module.exports= {
// 	getResult: function(sql, params, callback){		
// 		getConnection(function(connection){

// 			if(params == ""){
// 				connection.query(sql, function(err, result){				
// 				if(err){
// 						callback([]);
// 					}else{
// 						callback(result);
// 					}
// 				});
// 			}else{
// 				connection.query(sql, params, function(err, result){				
// 				if(err){
// 						callback([]);
// 					}else{
// 						callback(result);
// 					}
// 				});
// 			}
// 		});
// 	},
// 	execute: function(sql, params, callback){		
// 		getConnection(function(connection){

// 			if(params == ""){
// 				connection.query(sql, function(err, status){		
			
// 					if(err){
// 						callback(false);
// 					}else{
// 						callback(status);
// 					}
// 				});
// 			}else{
// 				connection.query(sql, params, function(err, status){		
			
// 					if(err){
// 						callback(false);
// 					}else{
// 						callback(status);
// 					}
// 				});
// 			}
// 		});
// 	}
// }




