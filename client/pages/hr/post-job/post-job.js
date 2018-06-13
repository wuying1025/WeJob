// pages/post-job/post-job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    hr_id: '',  
    array: [],
    ArrayIdIndex:[],
    ArrayListValue:[],
    index:'',

    array2: [],
    ArrayIdIndex2: [],
    ArrayListValue2: [],
    index2: '',

    array3: [],
    ArrayIdIndex3: [],
    ArrayListValue3: [],
    index3: '',

    array4: [],
    ArrayIdIndex4: [],
    ArrayListValue4: [],
    index4: '',

  name:'',
  requires:'',
  responsibility:'', 
  p_date_start: '2018-06-11',
  p_date_end: '2018-06-11',
  },
  bindPickerChangeCompany: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      company_id: this.data.ArrayIdIndex[e.detail.value],
      index:e.detail.value
    })   
  },
  
  bindPickerChangeSalary: function (e) {
    // console.log(1111111333);   
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      salary_id: this.data.ArrayIdIndex[e.detail.value],
      index2: e.detail.value
    })
  },
  bindPickerChangeCity: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      city_id: this.data.ArrayIdIndex[e.detail.value],
      index3: e.detail.value
    })
  },
  bindPickerChangeType: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      type_id: this.data.ArrayIdIndex[e.detail.value],
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
      requires: e.detail.value
    }),
      console.log(e.detail.value);
  },
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
            company: that.data.company_id,
            salary: that.data.salary_id,
            city: that.data.city_id,
            p_type: that.data.type_id,
            name: that.data.name,
            require: that.data.requires,
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
    var that = this;
    wx.request({
      url: 'https://zfbwoz2h.qcloud.la/HR/all_company',
      data: {
      },
      success: function (res) {
        var comp = res.data;
        var ids =[];
        var values =[];
        for (var i = 0; i < comp.length;i++){
          ids.push(comp[i].company_id);
          values.push(comp[i].company_name);
        }
        // console.log(res.data);      
        that.setData({
          array: res.data,
          ArrayIdIndex:ids,
          ArrayListValue:values
        });
      }
    }),
      wx.request({
        url: 'https://zfbwoz2h.qcloud.la/HR/all_salary',
        data: {
        },
        success: function (res) {
          var sal = res.data;
          var ids2 = [];
          var values2 = [];
          for (var i = 0; i < sal.length; i++) {
            ids2.push(sal[i].sal_id);
            values2.push(sal[i].sal_name);
          }
          // console.log(res.data);      
          that.setData({
            array2: res.data,
            ArrayIdIndex2: ids2,
            ArrayListValue2: values2
          });
        }
      }),
      wx.request({
        url: 'https://zfbwoz2h.qcloud.la/HR/all_salary',
        data: {
        },
        success: function (res) {
          var sal = res.data;
          var ids2 = [];
          var values2 = [];
          for (var i = 0; i < sal.length; i++) {
            ids2.push(sal[i].sal_id);
            values2.push(sal[i].sal_name);
          }
          // console.log(res.data);      
          that.setData({
            array2: res.data,
            ArrayIdIndex2: ids2,
            ArrayListValue2: values2
          });
        }
      }),
      wx.request({
        url: 'https://zfbwoz2h.qcloud.la/HR/all_city',
        data: {
        },
        success: function (res) {
          var cit = res.data;
          var ids3 = [];
          var values3 = [];
          for (var i = 0; i < cit.length; i++) {
            ids3.push(sal[i].cit_id);
            values3.push(sal[i].cit_name);
          }
          // console.log(res.data);      
          that.setData({
            array3: res.data,
            ArrayIdIndex3: ids3,
            ArrayListValue3: values3
          });
        }
      }),
      wx.request({
        url: 'https://zfbwoz2h.qcloud.la/HR/all_type',
        data: {
        },
        success: function (res) {
          var typ = res.data;
          var ids4 = [];
          var values4 = [];
          for (var i = 0; i < typ.length; i++) {
            ids4.push(sal[i].typ_id);
            values4.push(sal[i].typ_name);
          }
          // console.log(res.data);      
          that.setData({
            array4: res.data,
            ArrayIdIndex4: ids4,
            ArrayListValue4: values4
          });
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