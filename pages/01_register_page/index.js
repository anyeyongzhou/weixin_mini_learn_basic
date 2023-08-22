// pages/test01/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],

    //定义本地固定的数据
    counter:100,

    btns:["red","blue","green","orange"],
  },

  onBtn1Click(){
      //console.log("onBtn1Click")
    this.setData({
        counter:this.data.counter+1
    })
  },

  onBtnClick(event){
    console.log(event.target.dataset.color)
  },

  onPageScroll(event){
      console.log("pageScroll",event)
  },

  onReachBottom(){
      console.log("onReachBottom")
  },

  onPullDownRefresh(){
      console.log("onPullDownRefresh")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
        url: 'http://123.207.32.32:8000/home/multidata',
        success:(res)=>{
          const data=res.data.data
          const banners=data.banner.list
          const recommends=data.recommend.list
        //   console.log(banners)
        //   console.log(recommends)
          this.setData({
              banners,
              recommends
          })
        },
      })
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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})