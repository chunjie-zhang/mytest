var connection = require("./dao");
function student(){
    var querySql ="select * from student;";
    connection.connect();
    connection.query(querySql,function(error,result){
        if(error == null){
            console.log(result);
        }else{
            console.log(error);
        }
    })
}
student();