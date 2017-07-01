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
            //url-loader是转换图片文件，如果图片的啊小小于8192bytes，将会转成base64位的地址，相反就是普通地址
            {test:/\.(png|jpg)$/,loader:'url-loader?limit-8192'}
        ]
    }
};