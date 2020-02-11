(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{270:function(t,a,e){"use strict";e.r(a);var v=e(0),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http协议类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http协议类"}},[t._v("#")]),t._v(" HTTP协议类")]),t._v(" "),e("h2",{attrs:{id:"一、http协议主要特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、http协议主要特点"}},[t._v("#")]),t._v(" 一、HTTP协议主要特点")]),t._v(" "),e("p",[t._v("特点：简单快速、灵活、无连接、无状态。")]),t._v(" "),e("p",[t._v("简单快速：通过统一资源定位符URI。")]),t._v(" "),e("p",[t._v("灵活：一个http请求可以传输很多类型的资源。")]),t._v(" "),e("p",[t._v("无连接：连接完后会断开。")]),t._v(" "),e("p",[t._v("无状态：服务端没法判断两次连接是不是同一个身份。")]),t._v(" "),e("h2",{attrs:{id:"二、http报文组成部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、http报文组成部分"}},[t._v("#")]),t._v(" 二、HTTP报文组成部分")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/0015277c6575",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("分为请求报文和响应报文")]),t._v(" "),e("p",[t._v("请求报文包含：请求行、请求头、空行、请求体。")]),t._v(" "),e("p",[t._v("响应报文包含：状态行、响应头、空行，响应体。")]),t._v(" "),e("p",[t._v("请求报文示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("POST /user HTTP/1.1      //请求行\nHost: www.user.com\nContent-Type: application/x-www-form-urlencoded\nConnection: Keep-Alive\nUser-agent: Mozilla/5.0.      //以上是首部行\n（此处必须有一空行）  //空行分割header和请求内容 \nname=world   请求体\n")])])]),e("p",[t._v("响应报文示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' HTTP/1.1 200 OK  // 状态行\nAccept-Ranges: bytes\nCache-Control: private, no-cache, no-store, proxy-revalidate, no-transform\nConnection: Keep-Alive\nContent-Length: 2381\nContent-Type: text/html\nDate: Tue, 29 Oct 2019 15:08:16 GMT\nEtag: "588604c8-94d"\nLast-Modified: Mon, 23 Jan 2017 13:27:36 GMT  // 以上是响应头\n')])])]),e("h3",{attrs:{id:"_1、请求行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、请求行"}},[t._v("#")]),t._v(" 1、请求行")]),t._v(" "),e("p",[t._v("请求行由三部分组成：请求方法，请求URL（不包括域名），HTTP协议版本")]),t._v(" "),e("p",[t._v("请求方法比较多：GET、POST、HEAD、PUT、DELETE、OPTIONS、TRACE、CONNECT")]),t._v(" "),e("p",[t._v("最常用的是GET和POST。")]),t._v(" "),e("h2",{attrs:{id:"三、http方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、http方法"}},[t._v("#")]),t._v(" 三、HTTP方法")]),t._v(" "),e("p",[t._v("GET  获取资源")]),t._v(" "),e("p",[t._v("POST  传输资源")]),t._v(" "),e("p",[t._v("PUT  更新资源")]),t._v(" "),e("p",[t._v("DELETE  删除资源")]),t._v(" "),e("p",[t._v("HEAD  获取报文首部")]),t._v(" "),e("p",[t._v("OPTIONS  用于获取当前URL所支持的方法。若请求成功，会在HTTP头中包含一个名为“Allow”的头，值是所支持的方法，如“GET, POST”。")]),t._v(" "),e("h2",{attrs:{id:"四、get和post的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、get和post的区别"}},[t._v("#")]),t._v(" 四、get和post的区别")]),t._v(" "),e("p",[e("strong",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求")])]),t._v(" "),e("p",[t._v("GET产生的URL地址可以被收藏，而POST不可以")]),t._v(" "),e("p",[e("strong",[t._v("GET请求会被浏览器主动缓存，而POST不会，除非手动设置")])]),t._v(" "),e("p",[t._v("GET请求只能进行ur编码，而POST支持多种编码方式")]),t._v(" "),e("p",[e("strong",[t._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留")])]),t._v(" "),e("p",[e("strong",[t._v("GET请求在URL中传送的参数是有长度限制的，而POST没有限制")])]),t._v(" "),e("p",[t._v("对参数的数据类型，GET只接受ASC字符，而POST没有限制GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息")]),t._v(" "),e("p",[e("strong",[t._v("GET参数通过URL传递，POST放在 Request body中")])]),t._v(" "),e("h2",{attrs:{id:"五、http状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、http状态码"}},[t._v("#")]),t._v(" 五、HTTP状态码")]),t._v(" "),e("p",[t._v("1XX:指示信息一表示请求已接收，继续处理")]),t._v(" "),e("p",[t._v("2XX:成功一表示请求已被成功接收")]),t._v(" "),e("p",[t._v("3Xx:重定向一要完成请求必须进行更进一步的操作")]),t._v(" "),e("p",[t._v("4xx:客户端错误一请求有语法错误或请求无法实现")]),t._v(" "),e("p",[t._v("5xx:服务器错误-服务器未能实现合法的请求")]),t._v(" "),e("p",[t._v("几个比较重要的状态码：")]),t._v(" "),e("h3",{attrs:{id:"_2xx-成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功"}},[t._v("#")]),t._v(" 2XX 成功")]),t._v(" "),e("ul",[e("li",[t._v("200 OK，表示从客户端发来的请求在服务器端被正确处理")]),t._v(" "),e("li",[t._v("204 No content，表示请求成功，但响应报文不含实体的主体部分")]),t._v(" "),e("li",[t._v("205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容")]),t._v(" "),e("li",[t._v("206 Partial Content，进行范围请求")])]),t._v(" "),e("h3",{attrs:{id:"_3xx-重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向"}},[t._v("#")]),t._v(" 3XX 重定向")]),t._v(" "),e("ul",[e("li",[t._v("301 moved permanently，永久性重定向，表示资源已被分配了新的 URL")]),t._v(" "),e("li",[t._v("302 found，临时性重定向，表示资源临时被分配了新的 URL")]),t._v(" "),e("li",[t._v("303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源")]),t._v(" "),e("li",[t._v("304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况")]),t._v(" "),e("li",[t._v("307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求")])]),t._v(" "),e("h3",{attrs:{id:"_4xx-客户端错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误"}},[t._v("#")]),t._v(" 4XX 客户端错误")]),t._v(" "),e("ul",[e("li",[t._v("400 bad request，请求报文存在语法错误")]),t._v(" "),e("li",[t._v("401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")]),t._v(" "),e("li",[t._v("403 forbidden，表示对请求资源的访问被服务器拒绝")]),t._v(" "),e("li",[t._v("404 not found，表示在服务器上没有找到请求的资源")])]),t._v(" "),e("h3",{attrs:{id:"_5xx-服务器错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误"}},[t._v("#")]),t._v(" 5XX 服务器错误")]),t._v(" "),e("ul",[e("li",[t._v("500 internal sever error，表示服务器端在执行请求时发生了错误")]),t._v(" "),e("li",[t._v("501 Not Implemented，表示服务器不支持当前请求所需要的某个功能")]),t._v(" "),e("li",[t._v("503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求")])]),t._v(" "),e("h2",{attrs:{id:"六、http持久连接（仅http1-1）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、http持久连接（仅http1-1）"}},[t._v("#")]),t._v(" 六、HTTP持久连接（仅http1.1）")]),t._v(" "),e("p",[t._v('HTP协议采用“请求应答"模式，当使用普通模式，即非Keep-Alive模式时，每个请求应答客户和服务器都要新建一个连接，完成之后立即断开连接(HTTP协议为无连接的协议)。')]),t._v(" "),e("p",[t._v("当使用 Keep-Alive模式(又称持久连接、连接重用)时，Keep-Alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Aive功能避免了建立或者重新建立连接。")]),t._v(" "),e("h2",{attrs:{id:"七、http管线化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、http管线化"}},[t._v("#")]),t._v(" 七、HTTP管线化")]),t._v(" "),e("p",[t._v("在使用持久连接的情况下，某个连接上消息的传递类似于")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("请求1->响应1->请求2→>响应2→请求3->响应3\n")])])]),e("p",[t._v("如果用管线化，则会把请求和响应打包，然后发送")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("请求1->请求2->请求3->响应1->响应2->响应3\n")])])]),e("p",[t._v("管线化的特点：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("管线化机制通过持久连接完成，仅HTTP/1.1支持此技术。\n只有GET和HEAD请求可以进行管线化，而POST则有所限制。\n初次创建连接时不应启动管线机制，因为对方(服务器)不一定支持HTTP/1.1版本的协议。\n")])])]),e("p",[t._v("管线化不会影响响应到来的顺序，如上面的例子所示，响应返回的顺序并未改变。")]),t._v(" "),e("p",[t._v("HTTP/1.1要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对于管线化的请求不失败即可。")]),t._v(" "),e("p",[t._v("由于上面提到的服务器端问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不好，因此现代浏览器如Chrome和Frefx默认并未开启管线化支持。")])])}),[],!1,null,null,null);a.default=_.exports}}]);