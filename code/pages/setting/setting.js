Page({

  data: {
    menuOpen: true,
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
    this.setData({
      menuOpen: false
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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