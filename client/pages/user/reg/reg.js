Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    pwd:"",
    cpwd:"",
    check:""
  },
  userName: function (e) {
    this.setData({
      username: e.detail.value
    })
    console.log(this.data.username);
  },
  password: function (e) {
    this.setData({
      pwd: e.detail.value
    })
    console.log(this.data.pwd);
  },
  confirm: function (e) {
    this.setData({
      cpwd: e.detail.value
    })
    console.log(this.data.cpwd);
  },
  checkNumber: function (e) {
    this.setData({
      check: e.detail.value
    })
    console.log(this.data.check);
  },
  reg: function () {
    wx.request({
      url: '', //仅为示例，并非真实的接口地址
      data: {
        username: this.data.tel,
        pwd: this.data.pwd,
        cpwd: this.data.cpwd,
        check: this.data.check
      },
      success: function (res) {
        console.log(res.data)
        //注册判断
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