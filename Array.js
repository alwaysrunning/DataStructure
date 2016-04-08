// 1. 数组创建

var day = new Array();
var day = new Array(7);
var day = new Array('Sunday','Monday','Tuesday');

var day = [];
var day = ['Sunday','Monday','Tuesday'];

day[0] = 'Sunday';
day[1] = 'Monday';
day[2] = 'Tuesday';



//常用方法
//push,unshift,pop,shift,slice,splice，indexOf, join, toString


//concat方法可以向一个数组传递数组，对象或是元素


// 常用迭代器函数

var arr = [1,2,3,4,5,6,7,8,9,0]
var a = []


arr.forEach(function(i,j){
    console.log(i,j)
    a.push(i)
})


arr.map(function(i){
    return i+10;
})


arr.filter(function(i){
    return (i%2==0) ? true : false
})


// 排序

arr.sort()
arr.reverse()
arr.sort(function(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    return 0
})  


// 自定义排序
var friends = [{name:'join',age:30},{name:'andy',age:23}]

arr.sort(function(a,b){
    if(a.age<b.age){
        return -1;
    }
    if(a.age>b.age){
        return 1;
    }
    return 0
})