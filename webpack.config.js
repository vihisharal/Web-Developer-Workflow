var path=require('path');
module.exports={
    entry: "./app/assets/scripts/app.js",
    output : {
        path:path.resolve(__dirname,"./app/temp/scripts"),
        filename:"App-Bundle.js"
    },
    devtool:'source-map',
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ]
    }
}
