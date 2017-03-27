var app = require("./app.js");

var controller=app
.controller('collapsible',function($scope){
	$scope.show=false;
	$scope.a="bb";
	$scope.tabs=[
		{title:'国内新闻',text:'国内新闻模块的内容'},	
		{title:'国际新闻',text:'国际新闻模块的内容'},	
		{title:'行业新闻',text:'行业新闻模块的内容'},	
		{title:'推荐新闻',text:'推荐新闻模块的内容'},		
	]
})
.controller('autoComplete',function($scope){
	$scope.str='';
	$scope.isInput=false;
	$scope.arr=['app', 'apple', 'beer', 'now', 'new', 'zoom', 'z-index'];
})
.controller('displayMoreFonts',function($scope){
	$scope.display=false;
});
module.exports=controller;