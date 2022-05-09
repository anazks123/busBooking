const req = require('express/lib/request');
const res = require('express/lib/response');
var db = require('./db');

module.exports={


//LOGIN Check
	identity: function(user, callback){
		// var sql = "select * from userreg where username=? and password=?";

		// db.getResult(sql, [user.username, user.password], function(result){
		// 	callback(result);
		// });
		var sql2 = "select * from userreg where username = ? and password = ?";
		console.log(user)
			db.query(sql2,[user.username,user.password],(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
			})
	},
//REG INSERT
	inserted: function(user, callback){
		console.log(user)
		var status;
		 var sql = "insert into userreg set ? ";
		// db.execute(sql, [user.username, user.password, user.confirmpassword, user.email, user.gender], function(status){
		// 	callback(status);
		// 	console.log(status)
		// });
		db.query(sql,user,(err,result)=>{
			if(err){
				console.log(err)
				status=false;
			}else{
				console.log(result)
				status=true;
				callback(status);
			}
		})
		
	},
	
//ADD(BUS INSERT)
	addbusinfo: function(user, callback){
		var sql = "insert into userinfo values (null, ?,?,?,?)";
		db.execute(sql, [user.busname, user.time, user.start, user.end], function(status){
			callback(status);
		});
	},

//For combobox matching
	featchdata: function(user, callback){
		var sql = "select * from bus where start=? and end=?";

		db.query(sql,[user.start,user.end],(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
	},
	
		showdata: function(user, callback){
		var sql = "select * from bus where end=? and start=?";
			// db.query(sql,)
	},
	
	addticketinfo: function(user, callback){
		var sql = "insert into ticketinfo set ?";
		
		db.query(sql,user,(err,result)=>{
			if(err){
				console.log(err)
			}else{
				callback(result)
			}
		})
	},
		getdatabus : function(busId, callback){
		//var sql = "select * from bus where busid="+busId;
		var sql = "select * from bus where busid=?";
		
			db.query(sql,[busId],(err,result)=>{
				if(err){
					console.log(err)
				}else{
					callback(result)
				}
			})
	},
	
}