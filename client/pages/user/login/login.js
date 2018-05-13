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
  login:function(){
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/check_hr_login',
      data: {
        tel: this.data.tel,
        pwd: this.data.pwd
      },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000,
          success: function (res) {

            setTimeout(function () {
              wx.redirectTo({
                url: "../logined/logined",
                //接口调用成功的回调方法
                fuccess: function () { },

                fail: function () { },

                complete: function () { }
              })
            }, 2000)

          }
        })

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