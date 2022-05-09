var db = require('./db');

module.exports={


//LOGIN Check
	identity: function(user, callback){
		var sql = "select * from sellerreg where sellername=? and password=?";
		console.log(user)
		db.query(sql,[user.sellername,user.password],(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
		// db.getResult(sql, [user.sellername, user.password], function(result){
		// 	callback(result);
		// });
	},
//REG INSERT
	insert: function(user, callback){
		var status;
		var sql = "insert into sellerreg set ? ";
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
		var sql = "insert into bus set ? ";
		var status;
		//db.execute(sql, function(status){
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
	},
	
//SHOW ALL Table Info
	getuserlist: function(callback){
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

//Using Id Get Data
	getdata : function(tId, callback){
		//var sql = "select * from bus where busid="+busId;
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
		// //db.getResult(sql, function(result){
		// 	callback(result);
		// });
	},
//UPDATE
	postupdate:function(user, callback){
		//var sql = "update bus set busname='"+user.busname+"',time='"+user.time+"', start='"+user.start+"', end ='"+user.end+"'where busid="+user.busid;
		// var sql = "update ticketinfo set busname=?,time=?,price=?, start=?, end=? ,sii=?,name=?, phone=?, email=? where tid=?";
		var tid=user.tid;
		console.log(tid)
		var sql = `update ticketinfo set ? where tid = ${tid}`;
		var status;
		db.query(sql,user,(err,result)=>{
			
			if(err){
				console.log(err)
				status=false;
				callback(status)
			}else{
				console.log(result)
				status=true;
				callback(status);
			}
		})
		//db.execute(sql, function(status){
		// db.execute(sql, [user.busname, user.time, user.price, user.start,user.end,user.sii, user.name, user.phone,user.email,user.tid], function(status){
		// 	callback(status);
		// });
	},
//DELETE
	delete: function(tId, callback){
		//var sql = "delete from bus where busid=?";
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
		//db.execute(sql, function(status){
		// db.execute(sql, [tId], function(status){
		// 	callback(status);
		// });
	},
	
	//SHOW ALL Table Info
	getbuslist: function(callback){
		var sql = "select * from bus";

		db.query(sql,(err,result)=>{
			if(err){
				console.log(err)
			}else{
				console.log(result)
				callback(result);
			}
		})
	},
	
	
	
	
	
	//Using Id Get Bus Data
	getdatabus : function(busId, callback){
		//var sql = "select * from bus where busid="+busId;
		var sql = "select * from bus where busid=?";
		console.log(busId)
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
	busupdate:function(user,busid, callback){
		var busid=busid;
		console.log(busid)
		//var sql = "update bus set busname='"+user.busname+"',time='"+user.time+"', start='"+user.start+"', end ='"+user.end+"'where busid="+user.busid;
		var sql = `update bus set ? where busid = ${busid}`;
		var status;
		db.query(sql,user,(err,result)=>{
			
			if(err){
				console.log(err)
				status=false;
				callback(status)
			}else{
				console.log(result)
				status=true;
				callback(status);
			}
		})
		
		//db.execute(sql, function(status){
		
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
		// //db.execute(sql, function(status){
		// db.execute(sql, [busId], function(status){
		// 	callback(status);
		// });
	},
	
	get: function(sId, callback){
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
		// 	callback(result);
		// });
	},
	
	
}