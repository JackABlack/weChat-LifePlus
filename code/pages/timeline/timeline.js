const alter = require('../../utils/alter.js');
Page({

  data: {
    menuOpen: false,
    day: '',
    week: '',
    month: '',
    scrollHeight: 0,
    scrollTop: 0,
    display: [],
    logsList: [{
      time: '10:56',
      name: '今日示例1',
      amount: 2,
      status: false,
      member: ['\n'],
    }, {
      time: '11:59',
      name: '今日示例2',
      amount: 1,
      status: false,
      member: ['member1', 'member2', 'member3'],
    }, {
      time: '14:20',
      name: '今日示例3',
      amount: 1,
      status: true,
      member: ['member4', 'member1'],
    }, {
      time: '16:20',
      name: '今日示例4',
      amount: 1,
      status: false,
      member: ['member6', 'member7', 'member8'],
    }],

    logsList2: [{
     
      time: '1:56',
      name: '昨日示例1',
      amount: '4',
      status: true,
      member: ['\n'],
    }, {
      time: '5:23',
      name: '昨日示例2',
      amount: 1,
      status: false,
      member: ['member1', 'member2', 'member3'],
    }, {
      time: '8:33',
      name: '昨日示例3',
      amount: 1,
      status: true,
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
    this.setData({
      menuOpen: false
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
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    var today = new Date
    var n = this.data.logsList.length + 1
    var time = getApp().globalData.time
    var name = getApp().globalData.name
    var amount = getApp().globalData.amount
    var status = getApp().globalData.status
    var member = getApp().globalData.member
    var newItem = [{ time, name, amount, status, member }]
    var kill = getApp().globalData.kill
    var add = getApp().globalData.add
    console.log(kill);
    if (kill) {
      this.setData({
        display: [],
        logsList:[],
        logsList2: [],
      })
      getApp().globalData.kill = false
    }
    if (add) {
      this.setData({
        logsList: this.data.logsList.concat(newItem)
      })
      getApp().globalData.add = false
    }
    this.setData({
      day: alter.formatDate(today),
      week: alter.formatWeek(today),
      month: alter.formatMonth(today),
      display: this.data.logsList,
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
  scroll: function (event) {
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });

  },
  next: function () {
    var data = this.data.logsList2
    this.setData({
      display: this.data.display.concat(data)
    })
    page++;
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