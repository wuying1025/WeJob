var app = getApp();  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hr_id: '',
    test:[],
    flag: true,
    img: "../../me/person.jpg",
      logs: [] 
  },

  /**
   * 弹出层函数
   */
  //出现
  show: function () {
    wx.showModal({
      // title: '提示',
      content: '确定要退出？',
      success: function (res) {
        if (res.confirm) {
          wx.switchTab({
            url: '/pages/me/me',
          })
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })  
  },
  //消失

  hide: function () {

    this.setData({ flag: true })

  },
  basic: function () {
    wx.showToast({
      title: 'hhh',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar3();
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