/**
 * Created by xiaogao on 2017/7/1.
 */
module.exports = {
    entry: {
        bundle: './main.js',
        bundle1: './main1.js'
    },
    output: {
        filename: '[name].js' //此时的name指的就是上面的js文件
    }
};