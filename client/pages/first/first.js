Page({
  onMyEvent: function (e) {
    e.detail // 自定义组件触发事件时提供的detail对象
  },
  /**
   * 页面的初始数据
   */
  data: {
    fullHidden: "block",
    studyHidden: "block",
    full:'',
    study:'',
    all:"bold",
    msg:''
  },
  all_btn: function () {
    this.setData({
      fullHidden: "block",
      studyHidden: "block",
      searchHidden: "none",      
      all: "bold",     
      full: "",
      study: ""
    })
  },
  full_btn:function(){
    this.setData({
      fullHidden: "block",
      studyHidden: "none",
      searchHidden: "none",            
      full:"bold",
      study:"",
      all:""
    })
  },
  study_btn: function () {
    this.setData({
      fullHidden: "none",
      studyHidden: "display",
      searchHidden: "none",            
      full: "",
      study: "bold",
      all: ""      
    });
  },
  search:function(e){
    this.setData({
      fullHidden: "none",
      studyHidden: "none",
      searchHidden: "block",      
      full: "",
      study: "",
      all: "" ,
      msg: e.detail.value
    });
    var that = this;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/user/search_position_or_company',
      data: {
        key: that.data.msg
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          test: res.data
        });
      }
    });
  },
  components:{
   
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