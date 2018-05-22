// pages/post-job/post-job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['百度', '腾讯', '滴滴出行', '字节跳动'],
    objectArray: [
      {
        id: 0,
        name: '百度'
      },
      {
        id: 1,
        name: '腾讯'
      },
      {
        id: 2,
        name: '滴滴出行'
      },
      {
        id: 3,
        name: '字节跳动'
      }
    ],
  index:'',
  array2: ['1000', '2000', '3000', '4000'],
  objectArray: [
    {
      id: 0,
      name: '1000'
    },
    {
      id: 1,
      name: '2000'
    },
    {
      id: 2,
      name: '3000'
    },
    {
      id: 3,
      name: '4000'
    }
  ],
  index2: '',
  array3: ['上海', '北京', '武汉', '成都'],
  objectArray: [
    {
      id: 0,
      name: '上海'
    },
    {
      id: 1,
      name: '北京'
    },
    {
      id: 2,
      name: '武汉'
    },
    {
      id: 3,
      name: '成都'
    }
  ],
  index3: '',
  array4: ['实习', '全职'],
  objectArray: [
    {
      id: 0,
      name: '实习'
    },
    {
      id: 1,
      name: '全职'
    }
  ],
  index4: '',
  name:'',
  require:'',
  hr_id: '',
  responsibility:'', 
  p_date_start: '2016-09-01',
  p_date_end: '2016-09-01',
  },
  bindPickerChangeCompany: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangeSalary: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChangeCity: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChangeType: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  bindKeyInputname: function (e) {
    this.setData({
      name: e.detail.value
    }),
      console.log(e.detail.value);
  },
  bindKeyInputrequire: function (e) {
    this.setData({
      require: e.detail.value
    }),
      console.log(e.detail.value);
  },
  // bindKeyInputrequire: function (e) {
  //   this.setData({
  //     require: e.detail.value    
  //   }),
  //     console.log(2);
  // },
  bindKeyInputresponsibility: function (e) {
    console.log(1);
    this.setData({
      responsibility: e.detail.value
    
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
  send: function () { 
    var that = this;
    wx.getStorage({
      key: 'hr',
      success: function (res) {
       var id = res.data.hr_id;
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/HR/post_job',
          data: {  
            company: that.data.index,
            salary: that.data.index2,
            city: that.data.index3,
            p_type: that.data.index4,
            name: that.data.name,
            require: that.data.require,
            hr_id: id,
            p_date_start: that.data.p_date_start,
            p_date_end: that.data.p_date_end,
            responsibility: that.data.responsibility,
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