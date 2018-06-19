const alter = require('../../utils/alter.js');
Page({

  data: {
    time:'',
    amount:0,
    title: '',
    status:false,
    
    logsList: [{
      name: 'https://lifeplus-1256582318.cos.ap-chengdu.myqcloud.com/Avatar3png.png',
      status: false,
    }, {

        name: 'https://lifeplus-1256582318.cos.ap-chengdu.myqcloud.com/Avatar1.png',
      status: false,

    }, {
        name: 'https://lifeplus-1256582318.cos.ap-chengdu.myqcloud.com/Avatar2.png',
      status: true,
    }, ]
  },

gonnaStart:function(){
  getApp().globalData.start = true
  getApp().globalData.member = ['testuser1','testUser2','testuser3','testuser4']
  wx.navigateBack({
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   this.setData({
    time : getApp().globalData.time,
    title : getApp().globalData.name,
    amount : getApp().globalData.amount
   })
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