// pages/post-job/post-job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  company:'',
  name:'',
  require:'',
  hr_id: '',
  p_type: '',
  p_date_start: '',
  p_date_end: '',
  responsibility:'', 
  salary: '',
  p_date_start: '2016-09-01',
  p_date_end: '2016-09-01',
  },
  bindKeyInputcompany: function (e) {
    this.setData({
      company: e.detail.value
    })
  },

  bindKeyInputname: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  bindKeyInputrequire: function (e) {
    this.setData({
      require: e.detail.value
    })
  },

  bindKeyInputrearesponsibility: function (e) {
    this.setData({
      responsibility: e.detail.value
    })
  },

  bindKeyInputp_type: function (e) {
    this.setData({
      p_type: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    this.setData({
      p_date_start: e.detail.value,
    })
  },
  bindDateChange2: function (e) {
    this.setData({
      p_date_end: e.detail.value,
    })
  },
  // bindKeyInputp_date_start: function (e) {
  //   this.setData({
  //     p_date_start: e.detail.value
  //   })
  // },

  // bindKeyInputp_date_end: function (e) {
  //   this.setData({
  //     p_date_end: e.detail.value
  //   })
  //   console.log(this.data.p_date_end);
  // },

  bindKeyInputsalary: function (e) {
    this.setData({
    salary: e.detail.value
    })
  },

  send: function () { 
    var that = this;
    wx.getStorage({
      key: 'hr',
      success: function (res) {
       var id = res.data.hr_id;
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/post_job',
          data: {
            company: that.data.company,
            name: that.data.name,
            require: that.data.require,
            hr_id: id,
            p_type: that.data.p_type,
            p_date_start: that.data.p_date_start,
            p_date_end: that.data.p_date_end,
            responsibility: that.data.responsibility,
            salary: that.data.salary,
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