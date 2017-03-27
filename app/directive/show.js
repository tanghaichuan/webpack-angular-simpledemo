var app=require("../app");
/*
1、show指令渲染为<div ng-transclude></div>同时允许包含原有内容
2、为show指令创建一个控制器->goto函数用于循环tab状态，不是当前选择状态置否;add将每一个title所在的作用域添加进数组。
3、showmore指令渲染为一个包含title和body标签，为每一title绑定toggle函数
4、link:为指令定义连接函数，操纵DOM元素。
5、单击title触发toggle事件，当前title-body->ng-show状态取反，其他tab状态置否。
*/
var show=app.directive('show', function (){
        return {
            restrict: 'EA',
            replace:true,
            transclude:true,
            template:'<div ng-transclude></div>',
            controller:function(){
                var tabs=[];
                this.goto=function(slectedtab){
                    angular.forEach(tabs,function(tab){
                        if(slectedtab!=tab){
                            tab.showme=false;
                        }
                    })
                };
                this.add=function(tab){
                    tabs.push(tab);
                    //console.log(tabs);
                }
            }
        }
    });

    module.exports=show;