// pages/09_learn_api/index.js
import {hyRequest,hyReqInstance} from "../../service/request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allCities:[],
    houselist:[],
    currentPage:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
   async onLoad(options) {
    // wx.request({
    //   url: 'http://123.207.32.32:1888/api/city/all',
    //   success:(res)=>{
    //       //console.log(res)
    //       this.setData({
    //           allCities:res.data.data
    //       })
    //   },
    //   fail:(err)=>{
    //       console.log(err)
    //   }
    // })

    // wx.request({
    //     url: 'http://123.207.32.32:1888/api/home/houselist',
    //     data:{
    //         page:1
    //     },
    //     success:(res)=>{
    //         //console.log(res)
    //         this.setData({
    //             houselist:res.data.data
    //         })
    //     },
    //     fail:(err)=>{
    //         console.log(err)
    //     }
    //   })
    // hyRequest({ 
    //     url: 'http://codercba.com:1888/api/home/houselist',
    //     data:{
    //        page:1
    //    }
    // }).then((res)=>{
    //        console.log("request成功",res)
    //        this.setData({
    //             houselist:res.data.data
    //         })
    //    })
    // this.getCityData()

    // this.getHouseData()

    hyReqInstance.get({
        url:"/city/all"
    }).then(res=>{
        this.setData({
            allCities:res.data.data
        })
    })

  },

  async getCityData(){
    const res=await hyRequest({
        url: 'http://123.207.32.32:1888/api/city/all',
    })
    this.setData({
        allCities:res.data.data
    })
  },
  async getHouseData(){
    const res1=await hyRequest({
        url: 'http://codercba.com:1888/api/home/houselist',
        data:{
            page:this.data.currentPage
        }
    })
    const finalHouseList=[...this.data.houselist,...res1.data.data]
    this.setData({
        houselist:finalHouseList
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.data.currentPage++
    this.getHouseData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})