// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: 5,
    userInput: ""
  },
  onTap(e) {
    let stars = e.target.dataset.index;
    this.setData({
      stars: stars
    })
  },
  textAreaCon(e) {
    this.setData({
      userInput: e.detail.value
    })
  },
  upload() {
    wx.chooseImage({
      count: 1,
      success: res => {
        this.setData({
          imgUrl: res.tempFilePaths[0]
        })
      }
    })
  },
  onSave() {
    if (this.data.userInput == "") {
      wx.showModal({
        title: '提示',
        content: '输入点内容吧',
      })
    } else {
      console.log(this.data)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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