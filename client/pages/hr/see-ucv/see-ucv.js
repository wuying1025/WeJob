Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: '',
    hr_id: '',
    r_id: '',
    c_id: "",
    u_p_id: '',
    state: '',
    first: '初步审核',
    view: '面试',
    no: '不合适',
    src: "collect.png",
    test: [],
  },
  down: function (event) {
    var id = event.currentTarget.dataset['index'];
    console.log(id);
    wx.navigateTo({
      url: '../affix/affix?r_id=' + id,
    })
  }, 
  ok: function () {
    var that = this;
    var id = that.data.u_p_id;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/update_state',
      data: {
        u_p_id: id,
        state: that.data.first
      },
      success: function (res) {        
        console.log(res.data);
        that.setData({
          u_p_id: id
        });
        wx.showToast({
          title: '通过初审',
          icon: 'success',
          duration: 1000
        })
      }
    });
  },
  review: function () {
    var that = this;
    var id = that.data.u_p_id;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/update_state',
      data: {
        u_p_id: id,
        state: that.data.view
      },
      success: function (res) {        
        console.log(res.data);
        that.setData({
          u_p_id: id
        });
        wx.showToast({
          title: '面试',
          icon: 'success',
          duration: 1000
        })
      }
    });
  },
  pass: function () {
    var that = this;
    var id = that.data.u_p_id;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/update_state',
      data: {
        u_p_id: id,
        state: that.data.no
      },
      success: function (res) {       
        console.log(res.data);
        that.setData({
          u_p_id: id
        });
        wx.showToast({
          title: '不合适',
          icon: 'success',
          duration: 1000
        })
      }
    });
  },
  collect: function () {
    var that = this;
    var id = this.data.r_id;
    wx.getStorage({
      key: 'hr',
      success: function (res) {
        var hr_id = res.data.hr_id;
        that.setData({
          hr_id: hr_id
        });
        if (hr_id) {
          if (that.data.src == "collect.png") {
            wx.request({
              url: 'https://zfbwoz2h.qcloud.la/HR/collect_resume',
              data: {
                hr_id: hr_id,
                r_id: id
              },
              success: function (res) {
                // var id = res.currentTarget.dataset['index'];
                // console.log(id);
                that.setData({
                  src: "collected.png"
                });
                wx.showToast({
                  title: '收藏成功',
                  icon: 'success',
                  duration: 2000
                });             
              }
            })
          } else {
            if (that.data.src == "collected.png") {
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
                },
              })
            }
          }
        }

      },
      fail: function () {
        wx.showToast({
          title: '请先登录',
          icon: "none",
          duration: 1000
        });
        that.setData({
          src: "collect.png"
        });
      }
    })

  },

  onLoad: function (options) {
    var that = this;
    var id = options.r_id;
    wx.getStorage({
      key: 'hr',
      success: function (res) {
        var hr_id = res.data.hr_id;
        that.setData({
          hr_id: hr_id
        });
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/check_resume',
          data: {
            r_id: id,
          },
          success: function (res) {    
            that.setData({
              test: res.data[0],
              r_id: id,
            });
          }
        });

        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/get_collect_by_hr_id_r_id',
          data: {
            id: id,
            hr_id: that.data.hr_id
          },
          success: function (res) {
            var img = res.data;
            if (img == "not exist") {
              that.setData({
                src: "collect.png",
              })
            } else {
              that.setData({
                src: "collected.png",
                c_id: img,            
              })

            }
          },
        });
      }
    });

    this.setData({
      id: options.r_id,
      u_p_id: options.u_p_id
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