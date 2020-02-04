const {
    override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy
} = require('customize-cra')

const modifyVars = require('./lessVars')

module.exports = override(
    fixBabelImports('import',{
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
    }),
    
    addDecoratorsLegacy(),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars:modifyVars
    })
)

