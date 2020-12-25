//引入express
let express = require('express');
const ucRouter = require('./router/ucenter.js');
const userRouter=require('./router/user.js');
const productRouter=require('./router/product.js');
const indexRouter=require('./router/index.js');
//建立服务器
let app = express();
//设置端口
app.listen(8080);

//引入第三方文件
const bodyParser = require('body-parser');


//设置静态文件目录
app.use(express.static('./view'));

app.use(bodyParser.urlencoded({
	extended:false
}))

//添加/ucenter前缀，路由器挂载最后
app.use('/ucenter',ucRouter);
app.use('/product',productRouter);
app.use('/user',userRouter);
app.use('/index',indexRouter);
