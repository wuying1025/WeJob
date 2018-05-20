Page({
  data: {
    name: '',
    pwd: '',
    pwd1:''
  },
  bindKeyInputname: function (e) {
    this.setData({
      name: e.detail.value
    })

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
      url: 'https://zfbwoz2h.qcloud.la/user/add_user',
      data:{
        name: this.data.name,
        pwd: this.data.pwd,
        pwd1: this.data.pwd1
      },
      success: function (res) {
        if (res.data == 'empty') {
          wx.showToast({
            title: '请填写完整信息',
            icon: 'none',
            duration: 2000
          })
        }
        else {
          if (res.data == 'tel is exist') {
            wx.showToast({
              title: "用户已存在",
              icon: 'none',
              duration: 2000
            })
          } else if (res.data == 'pwd error') {
            wx.showToast({
              title: '两次输入密码不一致',
              icon: 'none',
              duration: 2000
            })
          } else if(res.data == 'success'){
            wx.showToast({
              title: '注册成功',
              duration: 2000
            });
            wx.navigateTo({
              url: '../login/login',
            })
          }else if(res.data == 'fail'){
            wx.showToast({
              title: '注册失败',
              duration: 2000
            });
          }
        }
      }
    })
    console.log(this.data.name)
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