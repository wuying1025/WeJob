
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: [],
    hr_id: '',
    r_id: '',
    c_id: '',
    show: "none",
    collect: "none"
  },
  cancel: function (event) {
    var that = this;
    var r_id = event.currentTarget.dataset['index'];
    console.log(r_id);
    this.setData({
      r_id: r_id
    });
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/get_collect_by_hr_id',
      data: {
        hr_id: that.data.hr_id,
        r_id: r_id
      },
      success: function (res) {
        that.setData({
          c_id: res.data.c_id
        });
    //  console.log(c_id);
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/del_collect_by_c_id',
          data: {
            c_id: that.data.c_id
          },
          success: function (res) {
            that.setData({
              src: "collect.png"
            });
            wx.showToast({
              title: '取消收藏',
              icon: 'success',
              duration: 1000
            })
            console.log(c_id);
            wx.navigateTo({
              url: 'collection',
            })
          },
        })

      },
    })

  },
  msginfo: function (event) {
    var id = event.currentTarget.dataset['index'];
    console.log(id);
    wx.navigateTo({
      url: '../../see-ucv/see-ucv?r_id=' + id,
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
        var hr_id = res.data.hr_id;
        that.setData({
          hr_id: hr_id
        });
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/get_collect_by_hr_id',
          data: {
            hr_id: hr_id
          },
          success: function (res) {
            console.log(res.data);
            if (res.data.length != 0) {
              console.log(111);
              that.setData({
                test: res.data,
                show: "none",
                collect: "block"
              });
              console.log(that.data.show);
            }
          },
          fail: function () {
            that.setData({
              show: "block",
              collect: "none"
            });
          }
        });
      },
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