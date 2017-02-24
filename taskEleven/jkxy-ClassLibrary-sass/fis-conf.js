fis.match('/css/index-sass.scss',{     
      rExt:'.css',
      preprocessor:fis.plugin('autoprefixer',{     //添加css前缀
          "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
          "cascade": true
      }),
      parser:fis.plugin('node-sass'),     //sass转css
      useHash: true,
      optimizer: fis.plugin('clean-css')  //压缩css
});

fis.match('*.{js,css,png}', { //添加MD5戳
  useHash: true
});

fis.match('/js/kecku.js', {
  optimizer: fis.plugin('uglify-js') //压缩js
});

fis.match('/img/*.png', {
  optimizer: fis.plugin('png-compressor') //压缩png图片
});

fis.match('::packager', { //基于页面的打包方式，只针对于前端
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});

/*fis.match('*.{less,css}', {  //基础整个项目的打包方式，这里暂不使用
  packTo: '/static/aio.css'
});*/




