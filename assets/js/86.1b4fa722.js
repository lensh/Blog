(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{288:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期"}},[t._v("#")]),t._v(" Vue生命周期")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/199362f3abd48cfb741f5111ea0269db/4E2CBA769B7C49D98F303A016F0077BA?ynotemdtimestamp=1581606289025",alt:"image"}})]),t._v(" "),e("ul",[e("li",[t._v("beforeCreate")]),t._v(" "),e("li",[t._v("created")]),t._v(" "),e("li",[t._v("beforeMount")]),t._v(" "),e("li",[t._v("mounted")]),t._v(" "),e("li",[t._v("beforeUpdate")]),t._v(" "),e("li",[t._v("updated")]),t._v(" "),e("li",[t._v("beforeDestroy")]),t._v(" "),e("li",[t._v("destroyed")]),t._v(" "),e("li",[t._v("activated")]),t._v(" "),e("li",[t._v("deactivated")])]),t._v(" "),e("h2",{attrs:{id:"beforecreate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),e("p",[t._v("在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。")]),t._v(" "),e("h2",{attrs:{id:"created"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),e("p",[t._v("在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前尚不可用。")]),t._v(" "),e("h2",{attrs:{id:"beforemount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),e("p",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用。\n该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h2",{attrs:{id:"mounted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),e("p",[t._v("实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当mounted被调用时vm.$el也在文档内。")]),t._v(" "),e("p",[t._v("注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mounted")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entire view has been rendered")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h2",{attrs:{id:"beforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),e("p",[t._v("数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。\n该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。")]),t._v(" "),e("h2",{attrs:{id:"updated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),e("p",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。")]),t._v(" "),e("p",[t._v("当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。")]),t._v(" "),e("p",[t._v("注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updated")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entire view has been re-rendered")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h2",{attrs:{id:"beforedestroy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),e("p",[t._v("实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h2",{attrs:{id:"destroyed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroyed"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),e("p",[t._v("实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。\n该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h2",{attrs:{id:"activated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activated"}},[t._v("#")]),t._v(" activated")]),t._v(" "),e("p",[t._v("被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。")]),t._v(" "),e("h2",{attrs:{id:"deactivated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deactivated"}},[t._v("#")]),t._v(" deactivated")]),t._v(" "),e("p",[t._v("被 keep-alive 缓存的组件停用时调用。该钩子在服务器端渲染期间不被调用。")])])}),[],!1,null,null,null);a.default=n.exports}}]);