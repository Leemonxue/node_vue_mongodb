var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/test';

/**
 * 连接
 */
mongoose.Promise = global.Promise; 
mongoose.connect(DB_URL,{useMongoClient:true});

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_URL);
});   

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});

//定义一个 schema,描述此集合里有哪些字段，字段是什么类型
//只有schema中有的属性才能被保存到数据库中
var UserSchema = new mongoose.Schema({
    name : { type:String },
    id : { type:Number }
});
//创建模型，可以用它来操作数据库中的person集合，指的是整体
var UserModel = mongoose.connection.model("collection1", UserSchema);

//根据模型创建实体，是指的个体对象
//用save 方法把自己保存到数据库中
// var UserEntity = new UserModel({
//     name : "01MongoDB",
//     id  : 1,
// });

// UserEntity.save(function(error,doc){
//     if(error){
//         console.log("error :" + error);
//     }else{
//         console.log(doc);
//     }
// });



module.exports = mongoose;
module.exports = UserModel;