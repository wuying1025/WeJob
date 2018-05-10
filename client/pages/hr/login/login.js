Page({
  data: {
    tel: '',
    pwd: ''
  },
  bindKeyInputtel: function (e) {
    this.setData({
      tel: e.detail.value
    })
    console.log(this.data.tel);
  },
  bindKeyInputpwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
    console.log(this.data.pwd);
  },
  login: function () {
    wx.request({
      url: 'user/check_login', //仅为示例，并非真实的接口地址
      data: {
        tel: this.data.tel,
        pwd: this.data.pwd
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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