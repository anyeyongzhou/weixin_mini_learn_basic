// app.js
App({
  onLaunch(options) {
    //console.log(options);
    //0.从本地获取token/userInfo
    const token =wx.getStorageSync('token')
    const userInfo=wx.getStorageSync('userInfo')

    //1.进行登录操作
    if(!token|| !userInfo){
        // 将登录成功的数据保存到storage
        console.log("登录操作")
        // 登录
        // wx.login({
        //     success: res => {
        //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //     }
        // })
        wx.setStorageSync('token', "kobetoken")
        wx.setStorageSync('userInfo', {nikename:'kobe',level:99});
    }

    //将获取到数据保存到globalData中
    this.globalData.token=token;
    this.globalData.userInfo=userInfo;
    //console.log(this.globalData)

    
  },
  onShow(options){
    //console.log("onShow",options);
  },
  onHide(){
   //console.log("onHide");
  },
  globalData: {
    token:"",
    userInfo: {
    }
  },
  anyName:{
    aaa:1111
  },
})
