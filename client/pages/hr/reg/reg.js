Page({
  data: {
    tel: '',
    pwd: '',
    pwd1:''
  },
  bindKeyInputtel: function (e) {
    this.setData({
      tel: e.detail.value,
     
    })
    console.log(e.detail.value)
  },
  bindKeyInputpwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
    
  },
  bindKeyInputpwd1: function (e) {
    this.setData({
      pwd1: e.detail.value
     
    })
  },
  reg: function (e) {
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/hr_reg',
      data:{
        tel: this.data.tel,
        pwd: this.data.pwd,
        pwd1: this.data.pwd1
      },
      success: function (res) {
        console.log(res.data)
      }
     
    })
    console.log(this.data.tel)
    console.log(this.data.pwd)
  },
  /**
   * 页面的初始数据
   */
  data: {

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