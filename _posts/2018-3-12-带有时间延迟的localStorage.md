---
layout:     post
title:      "带有时间延迟的localStorage"
subtitle:   "localStorage可以实现永久保存，但是如果我想要对localStorage进行个有时间延迟的二次封装呢？"
date:       2018-03-12
author:     "cl"
header-img: "img/home-bg-o.jpg"
catalog: true
tags:
    - HTML5
---

# 前言
写这篇文章的动机是因为最近正在找实习，投了一家公司出现的一道编程题，但是当时我对localStorage只停留在可以在浏览器端进行永久保存的认知阶段，自然而然丢了这道题的分数。但是，有了问题我们解决问题不就好了吗？

# 思路
既然要设置时间延迟期，我们自然就要知道3个量：存储时间，读取时间，设定延迟时间。倘若<b>*读取时间*-*存储时间*>*设定延迟时间*</b>，那么我们就认定数据已经过期了。

# 代码片段
```html
<body>
    <input type="button" value="checkUser" id="test">
    <script src="./index.js"></script>
</body>
```
``` javascript 
function setCookie(key,value){
    var currentDate=new Date().getTime();
    localStorage.setItem(key,JSON.stringify({data:value,time:currentDate}));
}
```

```javascript
function getCookie(key,exp){
    var currTime=new Date().getTime(),
        data=localStorage.getItem(key),
        dataObj=JSON.parse(data);
    if(currTime-dataObj.time>exp){
        console.log("信息已经过期");
    }else{
        var dataObjectTime=JSON.parse(dataObj.data);
        return dataObjectTime;
    }
}
```

``` javascript
//绑定事件
window.onload=function(){
    var choice=document.getElementById('test');
    var value='{"name":"clong","age":"22","sex":"male"}';
    setCookie('information',value);
    choice.onclick=function(){
        var getTime=getCookie('information',1000*30);//过期时间设置为30s
        console.log(getTime);
    }
}
```
# 运行结果
## 30s以内点击按钮
![](/img/in-post/localStorage/localStorageS.png)
## 30s之后点击按钮
![](/img/in-post/localStorage/localStorageF.png)

# 参考
[http://blog.csdn.net/xyphf/article/details/51830770](http://blog.csdn.net/xyphf/article/details/51830770)

[html5 的 localStorage 可否设置数据的时效时间？](https://segmentfault.com/q/1010000000801007)
