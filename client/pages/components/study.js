Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    test: []
  },
  ready: function () {
    var that = this;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/user/get_study_message', //仅为示例，并非真实的接口地址
      success: function (res) {
        console.log(res.data);
        that.setData({
          test: res.data
        });
      }
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    msginfo: function (event) {
      var id = event.currentTarget.dataset['index'];
      console.log(id);
      wx.navigateTo({
        url: '../user/position/position?p_id=' + id,
      })
    },
  }
})
