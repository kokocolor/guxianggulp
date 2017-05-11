mui.init();

//初始化，使用rem布局
var html = document.documentElement;
var htmlWidth = html.getBoundingClientRect().width;
html.style.fontSize = htmlWidth / 15 + "px";
//获取屏幕的高度
var winWidth = $(window).width();
var winHeight = $(window).height();

//获取电话

var kefu = document.getElementById('kefu');

//获取购物车按钮

var cart = document.getElementById('cart');

//获取底部的高度
var discription = $('#discription');
var discriptionTop = discription.offset().top;

//当数据加载以后可以进行缩放
$('div.pinch-zoom').each(function() {
	new RTP.PinchZoom($(this), {

	});

});
//获取详情结束

//跳转到购物车页面
cartTap();

function cartTap() {
	cart.addEventListener('tap', function() {
		mui.openWindow({
			url: 'cart.html',
			id: 'cart',
			styles: {
				top: 0, //新页面顶部位置
				bottom: 0 //新页面底部位置
				//						width: newpage - width, //新页面宽度，默认为100%
				//						height: newpage - height, //新页面高度，默认为100%
				//						......
			},
			extras: {
				//..... //自定义扩展参数，可以用来处理页面间传值
			},
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "pop-in", //页面显示动画，默认为”slide-in-right“；
				duration: 300, //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				event: 'titleUpdate', //页面显示时机，默认为titleUpdate事件时显示
				extras: {} //窗口动画是否使用图片加速
			},
			waiting: {
				autoShow: true, //自动显示等待框，默认为true
				title: '正在加载...', //等待对话框上显示的提示内容
				options: {
					width: 100, //等待框背景区域宽度，默认根据内容自动计算合适宽度
					height: 100, //等待框背景区域高度，默认根据内容自动计算合适高度

				}
			}
		})
	});

}

//拨打电话
kefu.addEventListener('tap', function() {
	var btnArray = ['拨打', '取消'];
	var Phone = "400-666-9096";
	mui.confirm('是否拨打 ' + Phone + ' ？', '提示', btnArray, function(e) {
		if(e.index == 0) {
			mui.toast('点击了拨打电话')
		} else {
			mui.toast('取消了电话拨号')
		}
	});
});