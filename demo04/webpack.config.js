/**
 * Created by xiaogao on 2017/7/1.
 */
module.exports = {
    entry:'./main.js',
    output:{
       filename:'bundle.js'
    },
    module:{
        rules:[
            //css-loader 用来读取css文件， 另外一个是style-loader 将style样式插入到html中，中间用！连接
            {test:/\.css$/,loader:'style-loader!css-loader'},
        ]
    }
};