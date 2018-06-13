const alter = require('../../utils/alter.js');
Page({

  data: {
    menuOpen: false,
    succ: '2',
    rank: 8,
    total: '1',
    logsList: [{
      rank: '1',
      name: 'testuser1',
      amount:265,
      succ:34,
      member:['\n'],
    }, {
      rank: '2',
      name: 'testuser2',
      amount: 133,
      succ: 22,
      member: ['member1', 'member2','member3'],
      }, {
        rank: '3',
        name: 'testuser3',
        amount: 132,
        succ: 13,
        member: ['member4', 'member1'],
    }, {
      rank: '4',
      name: 'testuser4',
      amount: 54,
      succ: 11,
      member: ['member6', 'member7', 'member8'],
      },{
        rank: '5',
        name: 'testuser5',
        amount: 64,
        succ: 8,
        member: ['\n'],
      }, {
        rank: '6',
        name: 'testuser6',
        amount: 21,
        succ: 5,
        member: ['member1', 'member2', 'member3'],
      }, {
        rank: '7',
        name: 'testuser7',
        amount: 11,
        succ: 3,
        member: ['member4', 'member1'],
      }]
  },

  //菜单组件
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
    this.setData({
      menuOpen: false
    })
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var today = new Date
    this.setData({
      
    })
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