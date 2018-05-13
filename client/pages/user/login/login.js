Page({
  data: {
    tel: '',
    pwd: ''
  },
  bindKeyInputtel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  bindKeyInputpwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  login:function(){
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/user/check_login', //仅为示例，并非真实的接口地址
      data: {
        tel: this.data.tel,
        pwd: this.data.pwd
      },
      success: function (res) {
        if(res.data =='pwd empty'){
          wx.showToast({
            title: '密码为空',
            icon: 'none',
            duration: 2000
          })
        } else if (res.data =='name not exit'){
          wx.showToast({
            title: '用户未注册',
            icon: 'none',
            duration: 2000
          })
        } else if (res.data =='pwd error'){
          wx.showToast({
            title: '密码错误',
            icon: 'none',
            duration: 2000
          })
        }else{
          wx.setStorage({
            key: "aaa",
            data: res.data
          })
          wx.switchTab({    //跳转到tabBar页面，并关闭其他所有tabBar页面
            url: "/pages/first/first"
          })
        }
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