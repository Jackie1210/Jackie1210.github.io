---
layout:     post
title:      "bootstrap源码学习"
subtitle:   "小白对bootstrap的学习"
date:       2017-09-05
author:     "cl"
header-img: "img/home-bg-o.jpg"
tags:
    - 前端开发
    - Bootstrap
---
## 前言
  这人啊惰性一旦起来了就再也消不下去了，暑假还是过的太舒坦，几个月前的boostrap学习也早已忘得精光。时间已经来到了大三，周围的人一个个都选择了去考研。望着他们口中的2~3万的培训班的费用，我不禁汗毛耸立，想想还有大三一年的时间来学习之前一直走走停停的前端，决定静下心来好好学习。之前的bootstrap是自己看源码慢慢学习的，速度很慢。这次我选择跟着mooc网上的大漠老师的bootstrap基础学习，写这篇博客也是为了加深印象，免得看过就忘。

- [标题](#标题)  
- [段落](段落)

## 标题
bootstrap为我们提供了small作为副标签,在h1~h3内，其大小都设置为当前字号的65%；而在h4~h6内的字号都设置为当前字号的75%。
## 段落
段落中的字体同意呈现灰色，14px大小，全部继承自body元素。
## 强调内容
bootstrap提供了.lead的类元素来显示。
## 粗体
同b、strong
## 斜体
同em、i
## 协调相关类
.text-muted：提示，使用浅灰色（#999）
.text-primary：主要，使用蓝色（#428bca）
.text-success：成功，使用浅绿色(#3c763d)
.text-info：通知信息，使用浅蓝色（#31708f）
.text-warning：警告，使用黄色（#8a6d3b）
.text-danger：危险，使用褐色（#a94442）
## 对齐风格
.text-left/right/center/justify:左/右/居中/两端居中
## 列表
important：1).list-unstyled(去点列表) 2).list-inline(内联列表) 3).dl-horizontal(定义水平列表，即标题与定义在同一行)
## 代码风格
1、使用code标签来显示单行内联代码
2、使用pre标签来显示多行块代码
3、使用kbd标签来显示用户输入代码 。
/*PS：.pre-scrolled最大高度为340px，否则显示y轴滚动条*/
## 表格
   .table：基础表格

   .table-striped：斑马线表格

   .table-bordered：带边框的表格

   .table-hover：鼠标悬停高亮的表格

   .table-condensed：紧凑型表格

   .table-responsive：响应式表格(宽度大鱼768px会出现滚动条)
## 表格行的类
1）.active	表示当前活动的信息

.success	表示成功或者正确的行为

.info	表示中立的信息或行为

.warning	表示警告，需要特别注意

.danger	表示危险或者可能是错误的行为

2）table class="table table-bordered"表格充满浏览窗口显示高亮色

table class="table table-hover"表格充满浏览窗口显示底色，鼠标划过显示高亮色

table class="table-hover"表格大小不充满浏览器显示底色，鼠标划过显示高亮色

## 基础表格
添加.table类
## 表单
### .form-control:

1、宽度变成了100%

2、设置了一个浅灰色（#ccc）的边框

3、具有4px的圆角

4、设置阴影效果，并且元素得到焦点之时，阴影和边框效果会有所变化

5、设置了placeholder的颜色为#999

### .form-horizontal
设置水平表单
### .form-inline
设置内联表单
### select multiple
多行选择,几行选择同时显现
### textarea表单控件文本域
秩序设置行高rows的值
### 复选按钮
1、不管是checkbox还是radio都使用label包起来了

2、checkbox连同label标签放置在一个名为“.checkbox”的容器内

3、radio连同label标签放置在一个名为“.radio”的容器内
### 复选按钮的水平排列
1、如果checkbox需要水平排列，只需要在label标签上添加类名“checkbox-inline”

2、如果radio需要水平排列，只需要在label标签上添加类名“radio-inline”(PS:name的值相同才可以实现单选)
### 按钮控件
btn:default

btn btn-primary(蓝色)

btn btn-info(青色)

btn btn-success(绿色)

btn btn-warning(黄色)

btn btn-danger(红色)

btn btn-inverse(深灰)

### 表单控件大小
1、input-sm:让控件比正常大小更小

2、input-lg:让控件比正常大小更大

(PS:仅仅对高度进行了操作)

### 焦点状态
:focus---添加了阴影

### 禁用状态
添加属性disabled(如:id="disabledSelect")
### 验证状态
1、.has-warning:警告状态（黄色）

2、.has-error：错误状态（红色）

3、.has-success：成功状态（绿色）

使用的时候只需要在form-group容器上对应添加状态类名。

若想要在后面加上勾或叉，只需加上hasfeedback

### 表单提示信息
可在div下加以help-block的类就可以了
### 按钮大小
btn-lg:大型按钮

btn-sm:小型按钮

btn-xs:超小型按钮

btn-block:块状按钮
### 按钮的禁用状态
1、在标签中添加disabled属性，即disabled=“disabled”

2、在元素标签中添加类名“disabled”
### 图像
1、img-responsive：响应式图片，主要针对于响应式设计

2、img-rounded：圆角图片

3、img-circle：圆形图片

4、img-thumbnail：缩略图片

## 网格系统
将网格包含在row的容器内，而row的容器和网格均包含在container容器内，col-md-x之和应小于12。原理是设置了浮动宽度。
### 列偏移
col-md-offset-* ,原理margin-left:*/12;

### 列排序
col-md-push-* :向右移动 ‘*’ 格;

col-md-pull-*  :向左移动 ‘*’ 格;

### 列的嵌套
原理: 在需要嵌套的地方加入row容器并接着实现网格效果

## 下拉菜单
1、使用一个名为“dropdown”的容器包裹了整个下拉菜单元素

2、使用了一个button按钮做为父菜单，并且定义类名“dropdown-toggle”和自定义“data-toggle”属性，且值必须和最外容器类名一致，此示例为:
data-toggle="dropdown"

3、下拉菜单项使用一个ul列表，并且定义一个类名为“dropdown-menu”

原理(important):
     
     .dropdown-menu 
     {
        position: absolute;/*设置绝对定位，相对于父元素div.dropdown*/

        top: 100%;/*让下拉菜单项在父菜单项底部，如果父元素不设置相对定位，该元素相对于body元素*/

        left: 0;

        z-index: 1000;/*让下拉菜单项不被其他元素遮盖住*/

       display: none;/*默认隐藏下拉菜单项*/
    }

PS:

1)当点击时,通过jquery获取dropdown类,为按钮添加*open*类,并修改
  
    .open>.dropdown-menu
    {
        display:block;
    }
2)分割线:添加一个类为*divider*的类.

3)添加菜单标题:添加一个类为*dropdown-header*的li

4)按钮组:在一个btn-group的容器内,添加button和span标签,例子如下:
	
	<button type="button" class="btn btn-default" aria-label="Left Align">
    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
    </button>
5)按钮工具栏:将按钮组放在名为btn-toolbar的容器内

6)嵌套分组:只需要将按钮组放在btn-group的容器内,其余按下拉菜单的样式来就行了.

7)垂直按钮组:将容器名改为btn-group-vertical;

原理

	.btn-group-vertical > .btn,
    .btn-group-vertical > .btn-group,
    .btn-group-vertical > .btn-group > .btn {
        display: block;
        float: none;
        width: 100%;
        max-width: 100%;
    }
    .btn-group-vertical > .btn-group > .btn {
      float: none;
    }









