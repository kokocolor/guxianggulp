function cartTap(){cart.addEventListener("tap",function(){mui.openWindow({url:"cart.html",id:"cart",styles:{top:0,bottom:0},extras:{},createNew:!1,show:{autoShow:!0,aniShow:"pop-in",duration:300,event:"titleUpdate",extras:{}},waiting:{autoShow:!0,title:"正在加载...",options:{width:100,height:100}}})})}mui.init();var html=document.documentElement,htmlWidth=html.getBoundingClientRect().width;html.style.fontSize=htmlWidth/15+"px";var winWidth=$(window).width(),winHeight=$(window).height(),kefu=document.getElementById("kefu"),cart=document.getElementById("cart"),discription=$("#discription"),discriptionTop=discription.offset().top;$("div.pinch-zoom").each(function(){new RTP.PinchZoom($(this),{})}),cartTap(),kefu.addEventListener("tap",function(){var t=["拨打","取消"];mui.confirm("是否拨打 400-666-9096 ？","提示",t,function(t){0==t.index?mui.toast("点击了拨打电话"):mui.toast("取消了电话拨号")})});