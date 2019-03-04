// pages/search/search.js
import {
  HTTP
} from '../../utils/http-promise.js'
let http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historySearch: wx.getStorageInfoSync("historySearch") || [],
    hotLesson: [],
    keyWord: "",
    lesson: [],
    total: null,
    showLesson: false,
    noData: false,
    noMore: false,
    loading: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getHotLesson()
  },
  getHotLesson() {
    http.request({
      url: '/hot_lesson'
    }).then(data => {
      this.setData({
        hotLesson: data
      })
    })
  },
  onConfirm(e) {
    let value = e.detail.value || e.currentTarget.dataset.value;
    if (value) {
      this.addHistorySearch(value)
      this.searchByKeyword(value)
      this.setData({
        keyWord: value,
        showLesson: true
      })
    }
  },
  searchByKeyword(value) {
    this.locked();
    let start = this.data.lesson.length;
    setTimeout(() => {
      http.request({
        url: `/query?q=${value}&start=${start}&size=6`
      }).then(data => {
        this.setLesson(data)
        this.unLocked()
      }, () => {
        this.unLocked()
      })
    }, 1000)
  },
  setLesson(data) {
    this.data.total = data.total;
    if (data.total == 0) {
      this.setData({
        noData: true,
        lesson: []
      })
    } else {
      let lesson = this.data.lesson.concat(data.lesson)
      this.setData({
        lesson: lesson
      })
    }
  },
  addHistorySearch(value) {
    let historySearch = this.data.historySearch || []
    let has = historySearch.includes(value)
    if (has) {
      return
    }
    let len = historySearch.length
    if (len >= 10) {
      historySearch.pop()
    }
    historySearch.unshift(value)
    wx.setStorage({
      key: 'historySearch',
      data: historySearch,
      success: () => {
        this.setData({
          historySearch: historySearch
        })
      }
    })
  },
  romveStorage() {
    wx.removeStorage({
      key: 'historySearch',
      success: function(res) {
        this.setData({
          historySearch: []
        })
      },
    })
  },
  onCancel() {
    this.setData({
      keyWord: "",
      lesson: [],
      total: null,
      showLesson: false,
      noData: false,
      noMore: false
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
    if (this.isLocked()) {
      return
    }
    if (this.hasMore()) {
      this.searchByKeyword(this.data.keyWord)
    } else {
      this.setData({
        noMore: true
      })
    }
  },
  hasMore() {
    return this.data.lesson.length >= this.data.total ? false : true;
  },
  isLocked() {
    return this.data.loading ? true : false;
  },
  locked() {
    wx.showLoading({
      title: '加载中...',
    })
    this.setData({
      loading: true
    })
  },
  unLocked() {
    wx.hideLoading();
    this.setData({
      loading: false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})