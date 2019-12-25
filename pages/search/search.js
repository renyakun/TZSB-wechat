// pages/search/search.js


const {
  url
} = require('../../utils/url.js');

import {
  wxRequest,
  showToast,
  checkModel
} from '../../utils/WeChatfction.js'


Page({
  // 获取报告列表
  getList() {
    let cookie = getApp().globalData.cookie;
    wxRequest('GET', url + '/report/list', {
      // reportNo: reportNo,
    }, cookie, (res) => {
      console.log(res.data.data)
      if (res.data.ok) {
        console.log("获取详情数据成功")
        setTimeout(() => {
          this.setData({
            list: res.data.data.list,
            todayflag: false
          })
        }, 1000)

      }
    }, (err) => {
      console.log(err)
    })
  },


  // 跳转到任务详情页
  toReportInfo(e) {
    console.log(e);
    let reportNo = e.currentTarget.dataset.reportno;
    let flag = e.currentTarget.dataset.flag;
    console.log(reportNo);
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/reportDetail/reportDetail?reportNo=' + reportNo + '&flag=' + flag,
      })
    }, 1000)

  },

  /**
   * 页面的初始数据
   */
  data: {
    status: '',
    flag: '',
    fixedflag: true,
    todayflag: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('123')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})