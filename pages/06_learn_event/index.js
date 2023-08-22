// pages/06_learn_event/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:["手机","电脑","照相机","iPad"],
    currentIndex:0,
  },
  onBtnTap(event){
      console.log("onBtnTap",event.currentTarget.dataset.name)
  },
  onBtnLongPress(){
    console.log("onBtnLongPress")
  },
  onItemTap(event){
    //console.log(event.currentTarget.dataset.index)
    const index=event.currentTarget.dataset.index
    this.setData({
        currentIndex:index
    })
  },
  onMarkTap(event){
      console.log("onMarkTap",event)
      console.log("name",event.mark.name)
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

  }
})