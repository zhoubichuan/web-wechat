// pages/detail/detail.js
import {
  HTTP
} from '../../utils/http-promise.js'
let http = new HTTP
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    showModalStatus: false,
    other: [{
      id: 1,
      title: 'js基础',
      date: 1549814400000
    }, {
      id: 2,
      title: 'css基础',
      date: 1549814400000
    }, {
      id: 3,
      title: 'html基础',
      date: 1549814400000
    }]
  },
  toCommnet() {
    wx.navigateTo({
      url: '/pages/comment/comment'
    })
  },
  showModal() {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    this.animation = animation

    animation.translateY(300).step()

    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  hideModal() {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export()
    })
    setTimeout(() => {
      this.animation.translateY(0).step()
      this.setData({
        animationData: this.animation.export(),
        showModalStatues: false
      })
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setNavTitle(options.title)
    this.getDetail(options.id)
  },
  setNavTitle(title) {
    wx.setNavigationBarTitle({
      title: title
    })
  },
  getDetail(id) {
    http.request({
      url: '/detail?id=' + id
    }).then(data => {
      this.setData({
        detailData: data
      })
    })
  },
  phoneCall() {
    wx.makePhoneCall ({
      phoneNumber: '12345678',
      success(e) {
        console.log(e)
      }
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
    return {
      title: "自定义转发标题",
      path: "/pages/home/home",
      imageUrl: "/images/vue.png"
    }
  }
})