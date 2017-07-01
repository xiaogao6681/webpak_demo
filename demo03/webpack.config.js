/**
 * Created by xiaogao on 2017/7/1.
 */
module.exports = {
    entry:'./main.jsx',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            //loader:'babel-loader?presets[]=es2015&presets[]=react'
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']

            }
        }
        ]
    }
};