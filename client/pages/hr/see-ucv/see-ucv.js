// pages/see-cv/see-cv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    r_id:'',
    test: []
  },

  onLoad: function (options) {
    var that = this;
    var id = options.r_id;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/check_resume',
      data: {
        r_id: id,
      },
      success: function (res) {        // console.log(res.data);
      console.log(res.data);
        that.setData({
          test: res.data
        });
      }
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