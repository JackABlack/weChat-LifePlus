// pages/main/main.js
const alter = require('../../utils/alter.js');
const timer = require('../../utils/wxTimer.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    addTimer: true,
    timerStart: false,
    //頭像獲取
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    time: '12:01',//时间选择器的值
    endTime: 0,//结束时间
    today: '',//今天的值
    timeNow: '12:01',//当前时间
    during: '',//持续时间
    timeLeft: '00:00:00',//剩余时间
    fail: false,//是否失败
    money: 0,
    title: ''
  },

  /**
   * 时间选择器
   */

  add: function () {

  },

  bindTimeChange: function (e) {

    this.setData({
      time: e.detail.value,
      endTime: Date.parse((this.data.today + e.detail.value)),//结束时间的时间戳
    })
  },
  title: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  money: function (e) {
    this.setData({
      money: e.detail.value
    })
  },
  /**
   * 计时器
   */

  start: function () {
    var timeNow = Date.parse(this.data.today + this.data.timeNow)//当前时间的时间戳
    var today = this.data.today
    this.setData({
      during: alter.formatSeconds((this.data.endTime - timeNow) / 1000)//持续时间的字符串表达
    })
    this.setData({
      timerStart: true,
      timeLeft: this.data.during
    })
    var Left = this.data.timeLeft
    var that = this
    var wxTimer = new timer({
      beginTime: this.data.during,
      complete: function () {
        wx.showToast({
          title: '恭喜完成挑战',
          mask: true,
        })
        that.setData({
          addTimer: false,
          timerStart: false,
        })
        wxTimer.stop();
      },
    })
    wxTimer.start(this);
  },

  closeFail: function () {
    this.setData({
      fail: false,
      addTimer: false,
      timerStart: false,
    })
  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  onLoad: function (options) {
    this.setData({
      timeNow: alter.formatTime(new Date),
      time: alter.formatTime(new Date),
      today: alter.formatRealDate(new Date),
      during: '0:10:0'
    })
    //加載頭像
    if (getApp().globalData.userInfo) {
      this.setData({
        userInfo: getApp().globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      getApp().userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          getApp().globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      fail: true,
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

});



