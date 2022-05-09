var db = require('./db');

module.exports={


//LOGIN Check
	identity: function(user, callback){
		var sql = "select * from adminreg where adminname=? and password=?";

		db.query(sql,[user.adminname,user.password],(err,result)=>{
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
		//var sql = "insert into userreg values ('"+user.username+"','"+user.password+"','"+user.confirmpassword+"','"+user.email+"','"+user.gender+"')";
		var sql = "insert into adminreg set ?";
		var status;
		db.query(sql,user,(err,result)=>{
			if(err){
				console.log(err)
				status = false;
				callback(status)
			}else{
				status = true;
				callback(status)
			}
		})
	},
	
//ADD(BUS INSERT)
	add: function(user, callback){
		//var sql = "insert into bus values (null, '"+user.busname+"','"+user.time+"','"+user.start+"','"+user.end+"')";
		var sql = "insert into bus set ?";
		var status;
		db.query(sql,user,(err,result)=>{
			if(err){
				console.log(err)
				status=false;
			}else{
				console.log(result)
				status=true;
				callback(status)
			}
		})
		//db.execute(sql, function(status){
		// db.execute(sql, [user.busname, user.time,user.price, user.start, user.end], function(status){
		// 	callback(status);
		// });
	},
	
//SHOW ALL Table Info
	getuserlist: function(callback){
		var sql = "select * from bus";

		db.query(sql,(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
		// db.getResult(sql, [], function(result){
		// 	callback(result);
		// });
	},
	
	
	getpasslist: function(callback){
		var sql = "select * from ticketinfo";
		db.query(sql,(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})

		// db.getResult(sql, [], function(result){
		// 	callback(result);
		// });
	},

	
	
	
//Using Id Get Bus Data
	getdatabus : function(busId, callback){
		//var sql = "select * from bus where busid="+busId;
		var sql = "select * from bus where busid=?";
		
		db.query(sql,[busId],(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
		// db.getResult(sql, [busId], function(result){
		// //db.getResult(sql, function(result){
		// 	callback(result);
		// });
	},
	
	
	
//UPDATE Bus
	busupdate:function(user, callback){
		var busid=user.busid;
		console.log(busid)
	
		//var sql = "update bus set busname='"+user.busname+"',time='"+user.time+"', start='"+user.start+"', end ='"+user.end+"'where busid="+user.busid;
		var sql = `update bus set ? where busid =  ${busid} `;

		var status;
		db.query(sql,user,(err,result)=>{
			
			if(err){
				console.log(err)
				status=false;
				callback(status)
			}else{
				status=true;
				callback(status);
			}
		})
		//db.execute(sql, function(status){
		// db.execute(sql, [user.busname, user.time, user.price, user.start,user.end, user.busid], function(status){
		// 	callback(status);
		// });
	},
	
	
//DELETE Bus
	busdelete: function(busId, callback){
		//var sql = "delete from bus where busid=?";
		var sql = "delete from bus where busid=?";
		var status;
		db.query(sql,[busId],(err,result)=>{
			if(err){
				console.log(err)
				status=false;
				callback(status)
			}else{
				console.log(result)
				status=true;
				callback(status)
			}
		})
		//db.execute(sql, function(status){
		// db.execute(sql, [busId], function(status){
		// 	callback(status);
		// });
	},
	
//Using Id Get Data
	//getdata : function(busId, callback){
		//var sql = "select * from bus where busid=?";
		
	//	db.getResult(sql, [busId], function(result){
		//	callback(result);
	//	});
	//},
//UPDATE
	//postupdate:function(user, callback){
		//var sql = "update bus set busname='"+user.busname+"',time='"+user.time+"', start='"+user.start+"', end ='"+user.end+"'where busid="+user.busid;
	//	var sql = "update bus set busname=?,time=?,price=?, start=?, end=? where busid=?";

		
		//db.execute(sql, function(status){
		//db.execute(sql, [user.busname, user.time, user.price, user.start,user.end, user.busid], function(status){
		//	callback(status);
		//});
	//},
//DELETE
	//delete: function(busId, callback){
		//var sql = "delete from bus where busid=?";
	//	var sql = "delete from bus where busid=?";

		//db.execute(sql, function(status){
		//db.execute(sql, [busId], function(status){
		//	callback(status);
		//});
	//},
	
	//Seller data
		getsellerlist: function(callback){
		var sql = "select * from sellerreg";

		db.query(sql,(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
		// db.getResult(sql, [], function(result){
		// 	callback(result);
		// });
	},
	
//Seller data for delete
	getsellerdata : function(sId, callback){
		//var sql = "select * from bus where busid="+busId;
		var sql = "select * from sellerreg where sid=?";
		
		console.log(sId)
		db.query(sql,[sId],(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
		// db.getResult(sql, [sId], function(result){
		// //db.getResult(sql, function(result){
		// 	callback(result);
		// });
	},
//DELETE
	deleteseller: function(sId, callback){
		//var sql = "delete from bus where busid=?";
		var sql = "delete from sellerreg where sid=?";

		//db.execute(sql, function(status){
			var status;
		db.query(sql,[sId],(err,result)=>{
			if(err){
				console.log(err)
				status=false;
				callback(status)
			}else{
				console.log(result)
				status=true;
				callback(status)
			}
		})
		// db.execute(sql, [sId], function(status){
		// 	callback(status);
		// });
	},

	//Using Id Get Data
	getdata : function(tId, callback){
		var sql = "select * from ticketinfo where tid=?";
		
		console.log(tId)
		db.query(sql,[tId],(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
		// db.getResult(sql, [tId], function(result){
		// 	callback(result);
		// });
	},
//UPDATE
	postupdate:function(user, callback){
		var tid=user.tid;
		var sql = `update ticketinfo set ? where tid= ${tid}`;
		var status;
		db.query(sql,user,(err,result)=>{
			if(err){
				console.log(err)
				status=false;
				callback(status);
			}else{
				console.log(err)
				status=true;
				callback(status);
			}
		})
		// db.execute(sql, [user.busname, user.time, user.price, user.start,user.end,user.sii, user.name, user.phone,user.email,user.tid], function(status){
		// 	callback(status);
		// });
	},
//DELETE
	delete: function(tId, callback){
		var sql = "delete from ticketinfo where tid=?";

		var status;
		db.query(sql,[tId],(err,result)=>{
			if(err){
				console.log(err)
				status=false;
				callback(status);
			}else{
				console.log(result)
				status=true;
				callback(status)
			}
		})
		// db.execute(sql, [tId], function(status){
		// 	callback(status);
		// });
	},
	
	
	
//Profile
		get: function(sId, callback){
		var sql = "select * from adminreg where id=?";

		console.log(sId)
		db.query(sql,[sId],(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
		// db.getResult(sql, [sId], function(result){
		// 	callback(result);
		// });
	},
	
//Search by name
	searchByName:function(busname,callback){
        var sql="select * from bus where busname=?"; 
		
		//$sql = "select username from user where username like '".$key."%'";

		//$sql = "select * from productentry where name like '".$name."%'";
		//var sql="SELECT * from employees WHERE username=?";
		
		db.getResult(sql,[busname],function(result){
			callback(result);
		});
	},

	
	
	
	
	
}