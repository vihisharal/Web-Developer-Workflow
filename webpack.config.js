var path=require('path');
module.exports={
    entry: {
        App:"./app/assets/scripts/app.js",
        Vendor:"./app/assets/scripts/vendor.js"
    },
    output : {
        path:path.resolve(__dirname,"./app/temp/scripts"),
        filename:"[name]-Bundle.js"
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
