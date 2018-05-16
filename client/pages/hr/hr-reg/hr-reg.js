Page({
  data: {
    tempFilePaths: '小吴老师.jpg',
    tel: '',
    pwd: '',
    pwd2:'',
    com:'',
    code:''
  },
  bindKeyInputtel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  bindKeyInputpwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  bindKeyInputpwd2: function (e) {
    this.setData({
     pwd2: e.detail.value
    })
  },
  bindKeyInputcom: function (e) {
    this.setData({
      com: e.detail.value
    })
  },
  bindKeyInputcode: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  reg: function () {
    wx.request({
      url: 'hr/index', 
      data: {
        tel: this.data.tel,
        pwd: this.data.pwd,
        pwd2: e.detail.value,
        com: e.detail.value,
        code: e.detail.value
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  reg: function (tel) {
    if (tel.length == 0) {
      wx.showToast({
        title: '请输入手机号！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    if (tel.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(tel)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    return true;
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
  }
})  