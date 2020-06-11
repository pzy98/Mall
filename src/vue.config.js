module.exports={
   configureWebpack:{
      //  extensions:[],//这个配置项是可省略后缀名的文件，但脚手架已默认配置过了
    // 别名配置，脚手架已默认配了src文件的别名为@
    resolve: {
      alias: {
          //配置别名
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
          'pluginunit':'@/pluginunit'
      }
  }
    }
}