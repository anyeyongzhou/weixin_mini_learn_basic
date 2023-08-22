// pages/10_learn_api1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onBtnToast(){
    //console.log("onBtnToast")
    wx.showToast({
      title: '成功',
      icon:'success',
      duration:2000,
      mask:true,
      image:"/assets/tabbar/profile_active.png"
    })
  },
  onBtnLoading(){
      wx.showLoading({
        title: '1111',
      })
  },
  onBtnModal(){
    //console.log("onBtnModal")
    wx.showModal({
      title: '确定购买吗？',
      content: '确定购买的话，请确定您的微信有钱！',
      complete: (res) => {
         // console.log(res)
        if (res.cancel) {
          console.log("点击取消")
        }
        if (res.confirm) {
            console.log("点击确定")
        }
      }
    
    })
  },
  onBtnActionSheet(){
    //console.log("onBtnActionSheet")
    wx.showActionSheet({
      itemList: ["1","2","3"],
      success:(res)=>{
        console.log(res)
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },
  onBtnSys(){
    wx.getSystemInfo({
        success:(res)=>{
          console.log(res)      
        }
    })
  },
  onBtnLocation(){
    wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
        },
        fail:(err)=>{
            console.log(err)
        },
        complete:()=>{
            console.log("complete")
        }
       })
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
    return {
        title:"分享标题",
        path:"/pages/faver/faver",
        imageUrl:"/assets/tabbar/profile.png"
    }
  }
})