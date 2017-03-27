var app=require("../app");

/*
1、indexOf(str)查找符合条件字符str
*/
var dropdownlist=app.directive('dropdownlist',function(){
	return {
		restrict:'E',
		template:'<input type="text" ng-focus="autoShow()" ng-blur="autoHide()" ng-model="str"/><ul ng-show="isInput"><li ng-repeat="v in arr"'+'ng-show="v.indexOf(str)!=-1">{{v}}</li></ul>',
		link:function(scope,element,attrs){
			scope.autoShow=function(){
				scope.isInput=true;
			}
			scope.autoHide=function(){
				scope.isInput=false;
			}
		}
	}
});

module.exports=dropdownlist;