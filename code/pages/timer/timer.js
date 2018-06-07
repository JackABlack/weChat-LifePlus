var order = ['red', 'yellow', 'blue', 'green', 'red']
const alter = require('../../utils/alter.js'); 
Page({
  data: {
    tads:'2018/6/5 23:00:00',
    time:'12:00',
    me:'',
  },
test:function(input){
   var that = this;
   console.log(input)
   that.setData({
     tads:Date.parse(input.detail.value)
   })
   console.log(this.data.tads)
 },
 bindTimeChange:function(e){
   this.setData({
     time:Date.parse(('2018/6/5 ' + e.detail.value)),
   })
   this.setData({   
     me: alter.formatSeconds((this.data.tads - this.data.time)/1000)
   })
   console.log(typeof e.detail.value)
   console.log(e.detail.value)
   console.log(this.data.time)
   console.log(this.data.me)
   console.log(this.data.tads - this.data.time)
 }
})

//实现思路：时间选择器选择出来的玩意是个字符串，字符串和今天的日期相加，加完了获得完整的时间字符串，用转换格式转换一下 然后把今天现在的时间字符串获取后转换，两者剪一下获得总共的毫秒数量，