// pages/order/order.js
Page({



  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      //获取共享数据
      //获取App实例
      const app=getApp();

      //从app实例对象中获取数据
      const token=app.globalData.token;
      const userInfo=app.globalData.userInfo;
      console.log(token,userInfo);

      //拿到token发送网络请求
    
      //将数据展示界面上
    //this.setData.userInfo=userInfo;
    this.setData({
        userInfo
    })
    console.log(this.data.userInfo)


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})