// pages/post-job/post-job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: 'default.png',
    array: [],
    ArrayIdIndex: [],
    ArrayListValue: [],
    index: '',
    test: [],
    name: '',
    hr_id: '',
    tel:'',
    email:''
  },

  bindKeyInputname: function (e) {
    this.setData({
      name: e.detail.value
    })
      // console.log(e.detail.value);
  },
  bindPickerChangeCompany: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      company_id: this.data.ArrayIdIndex[e.detail.value],
      index: e.detail.value
    })
  },
  bindKeyInputemail: function (e) {
    this.setData({
      email: e.detail.value
    })
  },
  bindKeyInputtel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  
  send: function () {
    var that = this;
    wx.getStorage({
      key: 'hr',
      success: function (res) {
        var id = res.data.hr_id;
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/update_hr',
          data: {
            company: that.data.index,
            name: that.data.name,
            tel: that.data.tel,
            email: that.data.email,
            hr_id: id,
          },
          success: function (res) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    });
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
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/all_company',
      data: {
      },
      success: function (res) {
        var comp = res.data;
        var ids = [];
        var values = [];
        for (var i = 0; i < comp.length; i++) {
          ids.push(comp[i].company_id);
          values.push(comp[i].company_name);
        }
        // console.log(res.data);      
        that.setData({
          array: res.data,
          ArrayIdIndex: ids,
          ArrayListValue: values
        });
      }
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