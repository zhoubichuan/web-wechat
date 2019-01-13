// pages/home/home.js
import {
  HTTP
} from "../../utils/http-promise.js"
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicator: true,
    str: ["/images/vue.png", "/images/react.jpg"],
    lesson: [],
    swiper: []
  },

  onToH5(e) {
    let url = e.target.dataset.url
    console.log(url)
    wx.navigateTo({
      url: `/pages/webView/webView?url=${encodeURIComponent(url)}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getSwiper()
    this.getLesson()
  },
  getSwiper() {
    http.request({
      url: '/getSliders'
    }).then(data => {
      this.setData({
        swiper: data
      })
    })
  },

  getLesson(){
    http.request({
      url:'/getLessons'
    }).then(data=>{
      this.setData({
        lesson:data
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})