Page({

  data: {
    menuOpen: false,
    kill:false,
    check1: true,
    check2: false,
    check3: false,
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
  noChangeOfRequest1:function(){
    this.setData({
      check1: false,
      check3:true,
    })
    wx.showModal({
      title: '警告',
      content:'您正在执行危险操作，本操作不可撤销，请再次轻点设置条目以确认！',
      showCancel:false,
      confirmText:'我已知晓',
      confirmColor:'#ff0000',
    })
  },
  noChangeOfRequest2: function () {
    this.setData({
      check3: false,
      check1: true,
    })
    getApp().globalData.kill = true,
    wx.showToast({
      title: '记忆清除执行完毕',
      icon:'success'
    })
  },
  noneOfYourBussiness:function(){
    wx.showToast({
      title: 'Function Under Constraction!',
      icon: 'none',

      duration: 4000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  
  //导航组件
  toSetting: function () {
    this.setData({
      menuOpen: false,
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
    wx.redirectTo({
      url: '../overview/overview',
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