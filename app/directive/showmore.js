var app=require("../app");
var showmore=app.directive('showmore',function(){
        return {
            restrict:'EA',
            replace:true,
            transclude:true,
            require:'^?show',
            /*require的作用是为了让父子指令或者兄弟指令的controller之间搭建一个桥梁。
            父指令里的controller里面的数据能分享给子指令的controller。
            其中子指令的link第四个参数的值是父指令的controller对象的作用域
            ? : 如果require没有找到相应的指令避免报错,能确保程序的正常执行
            ^ : 表示往父级查找*/
            scope:{
                title:'=showtitle'
            },
            template:'<div>'+
                    '<div class="title" ng-click="toggle()">{{title}}</div>'+
                    '<div class="body" ng-show="showme" ng-transclude></div>'+
                    '</div>',
            link:function(scope,element,attrs,acc){
                scope.showme=false;
                acc.add(scope);
                scope.toggle=function(){
                    scope.showme=!scope.showme;
                    acc.goto(scope);
                }
            }
        }
    });

module.exports=showmore;