// pages/hr/message/message.js
Page({
  data: {
    name: '',
    sex: '',
    company: '',
    email: '',
    tel: '' ,
    id: ''
  },
  bindKeyInputname: function (e) {
    this.setData({
      name: e.detail.value
    })
    console.log(this.data.name);
    // var id
    // wx.getStorage({
    //   key: 'hr',
    //   success: function (res) {
    //     id = res.data.hr_id;
    //     console.log(id);
    //   }
    // })
  },
  bindKeyInputsex: function (e) {
    this.setData({
      sex: e.detail.value
    })
    console.log(this.data.sex);
  },
  bindKeyInputcompany: function (e) {
    this.setData({
      company: e.detail.value
    })
    console.log(this.data.company);
  },
  bindKeyInputemail: function (e) {
    this.setData({
      email: e.detail.value
    })
    console.log(this.data.email);
  },
  bindKeyInputtel: function (e) {
    this.setData({
      tel: e.detail.value
    })
    console.log(this.data.tel);
  },
  save: function () {
    var id;
    wx.getStorage({
      key: 'hr',
      success: function (res) {
        id = res.data.hr_id;
        console.log(id);
        // console(res.data.hr_tel);        
        // that.setData({
        //   tel:res.data.hr_tel
        // })
        
    // wx.request({
    //   url: 'https://zfbwoz2h.qcloud.la/HR/update_hr',
    //   data: {
    //     name: this.data.name,
    //     sex: this.data.sex,
    //     company: this.data.company,
    //     email: this.data.email,
    //     tel: this.data.tel,
    //     id:id
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
      }
    })
  },
  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id;
    var tel
    wx.getStorage({
      key: 'hr',
      success: function (res) {
        id = res.data.hr_id;
        tel = res.data.hr_tel
        console.log(id);
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/own_mes',
          data: {
            id: id,
            tel: tel
          },
          success: function (res) {
            console.log(res.data)
          }
        })
      },
    })
  },
  //   wx.getStorage({
  //     key: 'hr',
  //     success: function(res) {
  //       var id = res.hr_id
  //       var tel = res.hr_tel
  //       wx.request({
  //         url: 'https://zfbwoz2h.qcloud.la/HR/update_hr',
  //         data: {
  //           id: id,
  //           tel: tel
  //         },
  //         success: function (res) {
  //           console.log(res.data)
  //         }
  //       })
      // },
  //   })
    

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