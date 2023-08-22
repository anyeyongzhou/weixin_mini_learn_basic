// components/c-lifetime/c-lifetime.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
      created(){
          console.log("组件被创建")
      },
      attached(){
        console.log("组件被添加到页面")
      },
      ready(){
        console.log("组件布局完成")
      },
      detached(){
        console.log("组件被销毁")
      }
  },
  pageLifetimes:{
      show(){
          console.log("page show")
      }
  }
})
