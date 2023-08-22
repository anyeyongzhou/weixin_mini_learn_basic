// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listCount:40
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    console.log("用户进行了下拉刷新");
    setTimeout(() => {
        this.setData({listCount:30})
        wx.stopPullDownRefresh({
            success:(res)=>{
                console.log("成功停止了下拉刷新",res);
            },
            fail:(err)=>{
                console.log("失败停止了下拉刷新",err);
            }
        })
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("onReachBottom")
    this.setData({
        listCount:this.data.listCount+30
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})