// pages/see-cv/see-cv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    p_id: '',
    test: []
  },
  msginfo: function (event) {
    var id = event.currentTarget.dataset['index'];
    console.log(id);
    wx.navigateTo({
      url: '../see-cv/see-cv?p_id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.p_id;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/get_pos_message',
      data: {
        p_id: id,
      },
      success: function (res) {
        // console.log(res.data);
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