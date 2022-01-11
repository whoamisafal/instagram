var mysql=require('mysql')

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'safalsth_Instagram',
    password:'H)U@<NFX264!gW#6',
    database:'safalsth_db_instagram',
    multipleStatements:true

})
mysqlConnection.connect(function(err){
    if(!err){
        console.log("Connected");
    }else{
        console.log("Connection failed");
    }


})
module.exports=mysqlConnection;









