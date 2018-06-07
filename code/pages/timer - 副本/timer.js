Page({
  data: {
    sliderValue: 30,
    ending: 0,
    target: 0,
    avtar: '',
    name: '',
    disp: true,
  },

  slider1(e) {
    this.setData({
      sliderValue: e.detail.value,
      beginning: (Date.parse(new Date()) / 1000),
      ending: (Date.parse(new Date()) / 1000 + this.data.sliderValue * 60)
    })//recording the sliderValue
  },

  timerStart(){
    this.setData({disp:false})
    console.log(this.data.disp)
  },


  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        that.setData({
          name: userInfo.nickName,
          avtar: userInfo.avatarUrl
        })
      }
    })   
  },
});



