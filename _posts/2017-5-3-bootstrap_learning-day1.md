---
layout:     post
title:      "bootstrap源码学习"
subtitle:   "小白对bootstrap的学习"
date:       2017-05-03
author:     "cl"
header-img: "img/home-bg-o.jpg"
tags:
    - 前端开发
    - Bootstrap
    - 翻译
---

## starter-template：

这是个简单的导航页面，看html源码时会发现nav标签。看w3c上对这个标签的解释如下:

><nav> 标签定义导航链接的部分。
乍一看这一解释似乎还不能让我们马上明白，于是我在浏览器上跑了之后显示如下

![](/images/posts/bootstrap/nav_compare.png)

![](/images/posts/bootstrap/nav_compare_after.png)

我们可以看到页面的右上角在nav标签的作用下，当页面被压缩时就会显示称一个缩略图，而且前面的导航栏中的选项也都变成缩略图的下拉内容。

### data-toggle、data-target...

这里采用w3c的解释如下:

>data-* 属性用于存储页面或应用程序的私有自定义数据。
>data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。
>存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行Ajax 调用或服务器端数据库查询）。
>data-* 属性包括两部分：
> * 属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符
> * 属性值可以是任意字符串

### label

label for="xxx"即label控件指向属性为xxx的表单元素
