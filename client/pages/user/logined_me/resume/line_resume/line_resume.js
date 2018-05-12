Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'man', value: '男' },
      { name: 'girl', value: '女', checked: 'true' }
    ],
    tempFilePaths: 'default.png',
    name:"",
    sex:"",
    birth: "",
    school: "",
    pos: "",
    tel: "",
    email:""
  },
  nameInput:function(e){
    this.setData({
      name: e.detail.value
    })
    console.log(this.data.value);
  },
  radioChange: function (e) {
    var that = this;
    var radioValue = e.detail.value;
    that.setData({
      value: radioValue
    })
    console.log(that.data.value);
    // if (that.data.currentTab >= 2) {
    //   wx.navigateTo({
    //     url: '../page3/page3',
    //   });
    // } else {
    //   that.setData({
    //     currentTab: that.data.currentTab + 1
    //   });
    // }
  },
  birthInput: function (e) {
    this.setData({
      birth: e.detail.value
    })
    console.log(this.data.birth);
  },
  schoolInput: function (e) {
    this.setData({
      school: e.detail.value
    })
    console.log(this.data.school);
  },
  posInput: function (e) {
    this.setData({
      pos: e.detail.value
    })
    console.log(this.data.pos);
  },
  telInput: function (e) {
    this.setData({
      tel: e.detail.value
    })
    console.log(this.data.tel);
  },
  emailInput: function (e) {
    this.setData({
      email: e.detail.value
    })
    console.log(this.data.email);
  },
  basic: function () {
    wx.request({
      url: '', //仅为示例，并非真实的接口地址
      data: {
        name: this.data.name,
        sex: this.data.sex,
        birth: this.data.birth,
        school: this.data.school,
        pos: this.data.pos,
        tel: this.data.tel,
        email: this.data.email
      },
      success: function (res) {
        console.log(res.data)
      }
    })
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