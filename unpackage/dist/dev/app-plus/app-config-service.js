
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/write/write","pages/my/my","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"悦读","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#707070","selectedColor":"#DE533A","list":[{"pagePath":"pages/index/index","text":"文章","iconPath":"static/nav1.png","selectedIconPath":"static/nav1-a.png"},{"pagePath":"pages/write/write","text":"写作","iconPath":"static/nav2.png","selectedIconPath":"static/nav2-a.png"},{"pagePath":"pages/login/login","text":"我的","iconPath":"static/nav3.png","selectedIconPath":"static/nav3-a.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"yuedu","compilerVersion":"2.6.1","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/write/write","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/my/my","meta":{},"window":{}},{"path":"/pages/login/login","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});