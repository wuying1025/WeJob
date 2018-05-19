Page({
  formSubmit1: function (e) {
   var id;
    wx.getStorage({
      key: 'user',
      success: function (res) {
         id = res.data.u_id;
         wx.request({
           url: 'https://zfbwoz2h.qcloud.la/user/add_cv1',
           data: {
             name: e.detail.value.name,
             sex: e.detail.value.sex,
             bir: e.detail.value.birthday,
             u_school: e.detail.value.u_school,
             pos: e.detail.value.pos,
             tel: e.detail.value.tel,
             email: e.detail.value.email,
             id: id
           },
           success: function (res) {
             console.log(res.data)
           }

         })
      }
    })
    
  },
  formSubmit2: function (e) {
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/user/add_cv2',
      data: {
        school: e.detail.value.school,
        job: e.detail.value.job,
        time: e.detail.value.time,
        tallest: e.detail.value.tallest

      },
      success: function (res) {
        console.log(res.data)
      }

    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: 'default.png'  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  }  ,
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