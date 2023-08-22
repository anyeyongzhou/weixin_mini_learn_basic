// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,// 如需尝试获取用户信息可改为false
    pages:[{
        name:"01_注册页面",
        path:"/pages/01_register_page/index"
    },
    {
        name:"02_公共组件",
        path:"/pages/02_common_cpns/indx"
    },
    {
        name:"03_样式",
        path:"/pages/03_learn_wxss/index"
    },{
        name:"04_页面",
        path:"/pages/04_learn_wxml/index"
    },{
        name:"05_wxs",
        path:"/pages/05_learn_wxs/index"
    },{
        name:"06_event",
        path:"/pages/06_learn_event/index"
    },{
        name:"07_component",
        path:"/pages/07_learn_cpns/index"
    },{
        name:"08_slot",
        path:"/pages/08_learn_slot/index"
    },
    {
        name:"09_api",
        path:"/pages/09_learn_api/index"
    },
    {
        name:"10_api1",
        path:"/pages/10_learn_api1/index"
    },
    {
        name:"11_登录",
        path:"/pages/11_learn_login/index"
    },
    ],
    
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
    
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onBtnClick(event){
      //console.log(event)
      const item=event.target.dataset.item
      //console.log(item)
      wx.navigateTo({
        url: item.path,
      })
  }
})
