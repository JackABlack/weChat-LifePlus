Page({

  data: {
    menuOpen: false,
    totalArray:[59,32,56,12,67,90,4,2,3,11,21,32],
    successArray:[32,12,43,11,33,78,2,4,10,13,27,12],
    total:59,
    //頭像獲取
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    success:32,
    zhDay:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    tapped1:false,
    tapped2: false,
    tapped3: false,
    tapped4: false,
    tapped5: false,
    tapped6: false,
    tapped7: false,
    tapped8: false,
    tapped9: false,
    tapped10: false,
    tapped11: false,
    tapped12: false,
  },
  open: function () {
    this.setData({
      menuOpen: true
    })
  },

  close: function () {
    this.setData({
      menuOpen: false
    })
  },
  //导航组件
  toSetting: function () {
    wx.redirectTo({
      url: '../setting/setting',
      success: function (res) { },
      fail: function (res) {
        wx.showToast({
          title: '出现了一些问题o(╥﹏╥)o',
          mask: true,
        })
      },
      complete: function (res) { },
    })
  },

  toTimeline: function () {
    wx.redirectTo({
      url: '../timeline/timeline',
      success: function (res) { },
      fail: function (res) {
        wx.showToast({
          title: '出现了一些问题o(╥﹏╥)o',
          mask: true,
        })
      },
      complete: function (res) { },
    })
  },

  toOverview: function () {
    this.setData({
      menuOpen: false
    })
  },

  toMain: function () {
    wx.redirectTo({
      url: '../main/main',
      success: function (res) { },
      fail: function (res) {
        wx.showToast({
          title: '出现了一些问题o(╥﹏╥)o',
          mask: true,
        })
      },
      complete: function (res) { },
    })
  },
  toProfile: function () {
    wx.redirectTo({
      url: '../profile/profile',
      success: function (res) { },
      fail: function (res) {
        wx.showToast({
          title: '出现了一些问题o(╥﹏╥)o',
          mask: true,
        })
      },
      complete: function (res) { },
    })
  },

  month1:function(){
    this.setData({
      total:this.data.totalArray[0],
      success: this.data.successArray[0],
      tapped1: true,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month2: function(){
    this.setData({
      total: this.data.totalArray[1],
      success: this.data.successArray[1],
      tapped1: false,
      tapped2: true,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month3: function(){
    this.setData({
      total: this.data.totalArray[2],
      success: this.data.successArray[2],
      tapped1: false,
      tapped2: false,
      tapped3: true,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month4: function(){
    this.setData({
      total: this.data.totalArray[3],
      success: this.data.successArray[3],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: true,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month5: function () {
    this.setData({
      total: this.data.totalArray[4],
      success: this.data.successArray[4],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: true,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month6: function () {
    this.setData({
      total: this.data.totalArray[5],
      success: this.data.successArray[5],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: true,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month7: function () {
    this.setData({
      total: this.data.totalArray[6],
      success: this.data.successArray[6],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: true,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month8: function () {
    this.setData({
      total: this.data.totalArray[7],
      success: this.data.successArray[7],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: true,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month9: function () {
    this.setData({
      total: this.data.totalArray[8],
      success: this.data.successArray[8],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: true,
      tapped10: false,
      tapped11: false,
      tapped12: false,
    })
  },
  month10: function () {
    this.setData({
      total: this.data.totalArray[9],
      success: this.data.successArray[9],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: true,
      tapped11: false,
      tapped12: false,
    })
  },
  month11: function () {
    this.setData({
      total: this.data.totalArray[10],
      success: this.data.successArray[10],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: true,
      tapped12: false,
    })
  },
  month12: function () {
    this.setData({
      total: this.data.totalArray[11],
      success: this.data.successArray[11],
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
      tapped6: false,
      tapped7: false,
      tapped8: false,
      tapped9: false,
      tapped10: false,
      tapped11: false,
      tapped12: true,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})