//How to use? const alter = require('../../utils/alter.js'); 

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [hour, minute].map(formatNumber).join(':')
}
function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return day
}
function formatRealDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return year + '/' + month + '/'  + day + ' '
}
function formatMonth(date) {
  var year = date.getFullYear()
  var month = date.getMonth()
  var day = date.getDate()
  var zhDay = new Array('一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月')
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [zhDay[month], year].map(formatNumber).join('   ')
}

function formatWeek(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var name = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  var k = date.getDay()
  var week = name[k]

  return week
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatSeconds(value) {
  var sec = value;
  var min;
  var hour;
  var result;

  hour = parseInt(sec / 60 / 60)
  min = parseInt((sec / 60)%60)
  sec = sec % 60
  result = hour + ':' + min + ':' + sec

  return result
}

function getUserID(value){
    var result = ''
    result = result + value[1].charCodeAt() + + value[0].charCodeAt() + + value[2].charCodeAt()
    return result
  }



module.exports = {
  formatTime: formatTime,
  formatWeek: formatWeek,
  formatDate: formatDate,
  formatMonth: formatMonth,
  formatSeconds: formatSeconds,
  formatRealDate: formatRealDate,
  getUserID: getUserID,
}  