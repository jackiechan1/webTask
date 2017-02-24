fis.match('/css/index.scss',{     
      rExt:'.css',
      preprocessor:fis.plugin('autoprefixer',{     //添加css前缀
          "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
          "cascade": true
      }),
      parser:fis.plugin('node-sass'),     //sass转css
      useHash: true,
      optimizer: fis.plugin('clean-css')  //压缩css
});






