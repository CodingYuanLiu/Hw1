# Kinds of Applications
## What is is App
App是英文Application（即application program：指能够执行某种功能的软件程序）的简称。可以理解为安装在某种系统下的第三方应用程序。随着移动互联网的不断发展壮大，智能手机系统上的应用不断井喷式发展，移动App在种类和数量上前所未有的走入人们的生活。所以现在说App，一般就是指IOS（苹果移动设备系统），Android（安卓系统）下的第三方软件程序。

## Classification of App
大致可以分为这3种：
1. Native App（原生app）
2. Web App
3. Hybrid App（混合app）

![avatar](https://upload-images.jianshu.io/upload_images/1668945-eebff27c68f3e4db.png)
### Native Applications
Native App开发即我们所称的传统APP开发模式（原生APP开发模式），该开发针对IOS、Android等不同的手机操作系统要采用不同的语言和框架进行开发。

该模式通常是由“云服务器数据+APP应用客户端”两部份构成，APP应用所有的UI元素、数据内容、逻辑框架均安装在手机终端上。

Native App的开发成本非常大，更新体验较差、同时也比较麻烦，但是可以调用IOS中的UI控件以UI方法，它可以实现WebApp无法实现的一些非常酷的交互效果。

### 2 Web Applications
Web App是无需安装，通过XHTML、CSS和JavaScript等网站技术实现的可以在任意浏览器中执行功能的网站类应用。与传统意义的网站不用的是在HTML5等技术的不断普及和应用使得Web App能够具有和Native App相似的界面和交互效果。与Native App相比其本身也有着独特的优势。

在使用上的具体表现是，手机浏览器点击进入，会有一些应用的小图标，这些小图标在点击后，在浏览器里加载的页面 跟你直接下载一个app后打开的页面是相同的，这些小图标代表的就是web app。
### 3 Hybrid Applications
Hybrid App（混合应用），顾名思义就是以上两种的结合。就是在Native App里面内置浏览器，以将合适的功能功能页面以网页的形式呈现。目前有很多的App开始采用这种方式。比如京东的某些营销页面，今日头条的某些新闻页面、微信的腾讯新闻的内容页面等。
## Pros and Cons
### Native App
优点：
* 提供最佳用户体验，最优质的用户界面，流畅的交互
* 可以访问本地资源
* 可以调用移动硬件设备，比如摄像头、麦克风等

缺点：
* 开发成本高。每种移动操作系统都需要独立的开发项目，针对不同平台提供不同体验；
* 发布新版本慢。下载是用户控制的，很多用户不愿意下载更新（比如说，版本发布到了3.0，但还是有很多1.0的用户，你可能就得继续维护1.0版本的API）
* 应用商店发布审核周期长。安卓平台大概要1~3天，而iOS平台需要的时间更长
### Web App
优点：
* 不需要安装包，节约手机空间
* 整体量级轻，开发成本低
* 不需要用户进行手动更新，由应用开发者直接在后台更新，推送到用户面前的都是全新版本，更便于业务的开展
* 基于浏览器，可以跨平台使用

缺点：
* 页面跳转费力，不稳定感更强。在网速受到限制时，很多时候出现卡顿或者卡死现象，交互效果受到限制
* 安全性相对较低，数据容易泄露或者被劫持
### Hybrid App
这类app集合了上面两种app各自的优势：
* 在实现更多功能的前提下，使得app安装包不至于过大
* 在应用内部打开web网页，省去了跳转浏览器的麻烦
* 主要功能区相对稳定下，增加的功能区采用web 形式，使得迭代更加方便
* web页面在用户设置不同的网络制式时会以不同的形式呈现（以微信朋友圈为例，在数据流量下，设置APNS为WAP时，微信订阅号内容将屏蔽图片和视频。这样就能为用户省去一部分流量，整个页面阅读就不那么友好了）

Hybrid APP:

![avatar](https://upload-images.jianshu.io/upload_images/1668945-6d8f35e7f126abf3.png)
### Which Kind of App to choose?
不同的页面情况选择不同的开发方式
* 如果app中出现了大段文字（如新闻、攻略等），并且格式比较丰富（如加粗、字体多样等），采用H5较好。原因：原生开发对解析json字符串格式不是很友好
* 如果讲究app反应速度（含页面切换流畅性），采用原生开发。原因：H5本质上是网页，换网页的时候，基本要加载整个页面，就像一个浏览器打开一个新的网页一样，比较慢，而原生系统只需要加载变化的部分
* 如果app对有无网络、网络优劣敏感（譬如有离线操作、在线操作），则采用原生开发。虽然H5可以做到，但是比较敏感
* 如果app要频繁地调用硬件设备（比如摄像头、麦克风等），则采用原生开发，这样支持硬件更多，调用速度更快，H5望尘莫及
* 如果app用户常见页面频换（如淘宝首页的各种营销活动），采用H5，维护起来更容易
* 如果预算有限（H5开发一套可在安卓、iOS、黑莓等跨平台使用）、不在乎用户体验、不在乎加载速度，肯定是H5
* 短期活动，专题营销类的页面居多的，可以选择原生app搭建框架，详细页面采用H5,便于活动的随时修改和管理
---
**Reference：**

***1. jianshu blog：***
https://www.jianshu.com/p/24bf070a4dcb

***2. Column of HelloApp:***
http://www.woshipm.com/pd/321844.html

***3. Wikipedia of Native(computing):***
https://en.wikipedia.org/wiki/Native_(computing)

***4. Wikipedia of Web Application:***
https://en.m.wikipedia.org/wiki/Web_application