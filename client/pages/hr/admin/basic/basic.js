// pages/see-cv/see-cv.js  
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    hr_id: '',
    test: []
  },
 

  msginfo: function (event) {
    var id = event.currentTarget.dataset['index'];
    console.log(id);
    wx.navigateTo({
      url: '../see-detail/see-detail?p_id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'hr',
      success: function (res) {
        var id = res.data.hr_id;
        console.log(id);
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/own_mes',
          data: {
            hr_id: id,
          },
          success: function (res) {
            // console.log(res.data);
            that.setData({
              test: res.data[0]
            });
          }
        })
      }
    });

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