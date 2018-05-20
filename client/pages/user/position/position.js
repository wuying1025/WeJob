Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:[],
    id:'',
    p_id:'',
    src:"collect.png",
    user_id:"",
    c_id:""
  },
  collect: function (){
    var that = this;
    var id = this.data.p_id;
    console.log(id);
    wx.getStorage({
      key: 'aaa',
      success: function (res) {
        var u_id = res.data.u_id;
        console.log(u_id);
        if (that.data.src=="collect.png"){
          console.log(111);
          wx.request({
            url: 'https://zfbwoz2h.qcloud.la/User/collect_position',
            data: {
              u_id: u_id,
              p_id: id
            },
            success: function (res) {
              that.setData({
                src: "collected.png"
              });
              wx.showToast({
                title: '收藏成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        } 
        if(that.data.src == "collected.png"){
          wx.request({
            url: 'https://zfbwoz2h.qcloud.la/User/del_collect_by_u_id_p_id',
            data: {
              c_id: that.data.c_id
            },
            success: function (res) {
              that.setData({
                src: "collect.png"
              });
              wx.showToast({
                title: '取消收藏',
                icon: 'success',
                duration: 1000
              })
            }
          })
        }
       
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.p_id;
    console.log(id);
    wx.getStorage({
      key: 'aaa',
      success: function (res) {
        var u_id = res.data.u_id;
        console.log(u_id);
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/user/get_pos_message', //仅为示例，并非真实的接口地址
          data: {
            id: id
          },
          success: function (res) {
            console.log(res.data);
            that.setData({
              test: res.data,
              p_id: id
            });
          }
        });
        wx.request({
          url: 'https://zfbwoz2h.qcloud.la/user/get_collect_by_u_id_p_id',
          data: {
            id: id,
            u_id: u_id
          },
          success: function (res) {
            var img = res.data;
            console.log(img);
            if(img>0){
              that.setData({
                src:"collected.png",
                c_id:img
              })
            }else{
              that.setData({
                src: "collect.png"
              })
            }
          
          }
        })
      }
    });
   
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