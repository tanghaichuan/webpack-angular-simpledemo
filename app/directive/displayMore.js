var app=require('../app');
var displayMore=app.
directive('displaymore',function(){
	/*
		通过单击事件控制自定义指令的属性类
	*/
	return {
	        restrict: 'E',
	        template:'<div class="{{display?\'display-more\':\'display\'}}">' +
	        '<a href="javascript:;" ng-click="display=!display">显示更多</a>' +
	        '<span ng-transclude></span></div>',
	        transclude: true
	    };

});
module.exports=displayMore;