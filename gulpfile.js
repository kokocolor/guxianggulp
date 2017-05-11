var gulp=require('gulp'),
	less=require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
    cssmin=require('gulp-clean-css'),
    uglify= require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');
    
//自定义任务名称
// less转为css src/css/css
gulp.task('testless',function(){
	gulp.src('src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('src/css'))
   
});


//加前缀src/cssall 并css压缩
gulp.task('testAutoFx', function () {
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('src/cssall'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/src/css'))
});

// css压缩src/css
// gulp.task('testcssmin', function () {
//     gulp.src('src/cssall/*.css')
//         .pipe(cssmin())
//         .pipe(gulp.dest('src/css'))
// });



// ****************压缩js
gulp.task('jsmin', function () {
    //压缩src/js目录下的所有js文件
    //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
     // gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js']) 
    gulp.src(['src/js/*.js']) 
        .pipe(uglify())
        .pipe(gulp.dest('dist/src/js'));
});

// ****************压缩html 
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});



 gulp.task('watch', function () {
    gulp.watch('src/less/*.less', ['testless']);
    gulp.watch('src/css/*.css', ['testAutoFx']);
    gulp.watch('*.html', ['testHtmlmin']);
    gulp.watch('src/js/*.js', ['jsmin']);
});

 //定义默认任务
 gulp.task('default',['testAutoFx','testHtmlmin','jsmin','watch']);
 
