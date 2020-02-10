(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{226:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rem的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem的使用"}},[t._v("#")]),t._v(" rem的使用")]),t._v(" "),a("h2",{attrs:{id:"_1、为什么要用rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、为什么要用rem"}},[t._v("#")]),t._v(" 1、为什么要用rem")]),t._v(" "),a("p",[t._v("移动端最麻烦的是什么？不同分辨率适配！具体来说，有的屏幕320px宽，有的屏幕640px宽，有的更宽，如果你写固定px，那么要么小的放不下，要么大的有大片空白。怎么办？")]),t._v(" "),a("p",[t._v("如果元素固定占用屏幕空间（一般是指宽度而非高度，下同）的百分之xx就ok了。比如320px的10%是32px，640px的10%是64px，如果10个10%宽度的元素放在一起，那肯定就是100%，即挤满屏幕（宽度），不会超出，也不会留白。")]),t._v(" "),a("p",[t._v("简单理解：rem 就是指屏幕宽度的百分之x；或者说，n个rem = 用户可视区域100%宽度")]),t._v(" "),a("p",[t._v("注意，之所以不说高度，是因为宽度（x轴）满了后，y轴（高度）方向的内容可以通过滚动屏幕来查看")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、设计师给一个640px宽度的设计图，\n\n2、你假定64rem=100%宽度（这里是640px），那么1rem=10px；\n\n3、你照着写出了静态页面，然后按照1rem=10px的比例，将设计图上的元素的大小，全部用rem写下；\n\n4、完美，你写的静态页面在640px宽度的页面上正常展示了；\n\n5、A用户使用的是320px宽度的手机，因为你假设64rem=100%宽度，因此此时1rem=5px（320/64=5），于是也完美展示了；\n")])])]),a("h2",{attrs:{id:"_2、rem怎么用？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、rem怎么用？"}},[t._v("#")]),t._v(" 2、rem怎么用？")]),t._v(" "),a("p",[t._v("rem是css单位；1rem的大小是通过html下的font-size这个css属性告诉浏览器的；使用替换px所在的位置即可\n假定你预设在设计稿的时候 1rem = 10px;然后一个元素（class=”ele”）的宽度是20px，高度30px（设计稿），那么你的css这么写就可以了；")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".ele")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    height 3rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3、在任何分辨率下都适用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在任何分辨率下都适用"}},[t._v("#")]),t._v(" 3、在任何分辨率下都适用")]),t._v(" "),a("p",[t._v("如何确认1rem等于多少px？rem是css中使用的单位，css是不会帮你计算1rem是多少px的，只能通过你自己来计算。计算方式很简单，简单来说：")]),t._v(" "),a("p",[t._v("1、你有一个设计稿A（假定640px），有一个预设的rem和px的比例B（假如是1rem = 10px）")]),t._v(" "),a("p",[t._v("2、获取用户浏览器的可视区域的宽度C（假如是320px），那么他此时1rem的尺寸D 可以根据 B/A = D/C 这个公式得知")]),t._v(" "),a("p",[t._v("3、原因是你假定屏幕可以容纳多少个rem，这是一个固定比例（如这里就是64rem）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1 rem = B / A * C;\n//代入可得\n1 rem = 10px / 640px * 320px = 5px;\n")])])]),a("h2",{attrs:{id:"_4、通用计算公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、通用计算公式"}},[t._v("#")]),t._v(" 4、通用计算公式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//屏幕适应")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resizeEvt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resize'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// orientationchange事件在设备的纵横方向改变时触发。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFont")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里是假设在640px宽度设计稿的情况下，1rem = 20px；")]),t._v("\n        html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setFont"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resizeEvt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setFont"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5、使用css适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、使用css适配"}},[t._v("#")]),t._v(" 5、使用css适配")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vw / 7.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("　　\n")])])]),a("p",[t._v("根据CSS3规范，视口单位主要包括以下4个：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    1.vw：1vw等于视口宽度的1%。\n    2.vh：1vh等于视口高度的1%。\n    3.vmin：选取vw和vh中最小的那个。\n    4.vmax：选取vw和vh中最大的那个。\n")])])]),a("p",[t._v("vh and vw：相对于视口的高度和宽度，而不是父元素的（CSS百分比是相对于包含它的最近的父元素的高度和宽度）。1vh 等于1/100的视口高度，1vw 等于1/100的视口宽度。")])])}),[],!1,null,null,null);s.default=e.exports}}]);