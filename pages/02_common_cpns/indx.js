// pages/02_common_cpns/indx.js
const defaultAvatar='https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({

  data:{
    message:"你好，李银河",
    avatarUrl:defaultAvatar,
    imageUrl:null,
    viewColor:["red","blue","green","orange","purple","yellow"],
    inputValue:"123",
  },
  getUserInfo(event){
    //console.log(event)
    wx.getUserProfile({
      desc: '测试获取用户信息',
      success:(res)=>{
        console.log(res)
      }
    })
  },
  getAcatar(event){
    //console.log(event.detail)
    this.setData({
        avatarUrl:event.detail.avatarUrl
    })
  },

  getNickname(event){
    console.log(event.detail)
  },

  getPhoneNumber(event){
    console.log(event)
  },

  onViewTap(){
    console.log("onVIewTap")
  },

  onChooseImage(){
    wx.chooseMedia({
        mediaType:"image",
        sourceType:"album",
    }).then(res=>{
        console.log(res)
        this.setData({
            imageUrl:res.tempFiles[0].tempFilePath
        })
    })
  },
  onScrolllower(){
    console.log("onScrolllower")
  },
  onScrollupper(){
    console.log("onScrollupper")
  },
  onScroll(event){
      console.log(event)
  },
})