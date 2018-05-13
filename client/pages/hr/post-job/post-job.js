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
  },
  bindKeyInputcompany: function (e) {
    this.setData({
      company: e.detail.value
    })
    console.log(this.data.tel);
  },

  bindKeyInputname: function (e) {
    this.setData({
      name: e.detail.value
    })
    console.log(this.data.pwd);
  },

  bindKeyInputrequire: function (e) {
    this.setData({
      require: e.detail.value
    })
    console.log(this.data.pwd);
  },

  bindKeyInputrearesponsibility: function (e) {
    this.setData({
      responsibility: e.detail.value
    })
    console.log(this.data.pwd);
  },

  bindKeyInputp_type: function (e) {
    this.setData({
      p_type: e.detail.value
    })
    console.log(this.data.pwd);
  },

  bindKeyInputp_date_start: function (e) {
    this.setData({
      p_date_start: e.detail.value
    })
    console.log(this.data.pwd);
  },

  bindKeyInputp_date_end: function (e) {
    this.setData({
      p_date_end: e.detail.value
    })
    console.log(this.data.pwd);
  },

  bindKeyInputsalary: function (e) {
    this.setData({
    salary: e.detail.value
    })
    console.log(this.data.pwd);
  },

  send: function () {
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/check_hr_login',
      data: {
        company: this.data.ompany,
        name: this.data.name,
        require: this.data.require,
        hr_id: this.data.hr_id,
        p_type: this.data.p_type ,
        p_date_start: this.data.p_date_start,
        p_date_end: this.data.p_date_end,
        responsibility: this.data.responsibility,
        salary: this.data.salary,
      },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000,
        

         
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