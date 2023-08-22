// components/section-indo/section-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
        type:String,
        value:"默认标题"
    }, 
    content:{
        type:String,
        value:"默认内容"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // title:"我是自定义组件的标题",
    // content:"我是自定义组件的内容",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onViewTap(){
        console.log("onViewTap")
        this.triggerEvent("titleclick","aaa")
    },
    onSectionsTap(){
        console.log("组件内部的方法")
    },
  },
  externalClasses:["info"],
  options:{
    //   styleIsolation:"isolated",
      virtualHost:true,
  },
//   behaviors: ['wx://component-export'],
//   export() {
//     return { myField: 'myValue' }
//   }
})
