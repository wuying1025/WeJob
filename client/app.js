//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)

         var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)  
    },
    //第一种状态的底部  
    editTabBar: function () {
      var _curPageArr = getCurrentPages();
      var _curPage = _curPageArr[_curPageArr.length - 1];
      var _pagePath = _curPage.__route__;
      if (_pagePath.indexOf('/') != 0) {
        _pagePath = '/' + _pagePath;
      }
      var tabBar = this.globalData.tabBar;
      for (var i = 0; i < tabBar.list.length; i++) {
        tabBar.list[i].active = false;
        if (tabBar.list[i].pagePath == _pagePath) {
          tabBar.list[i].active = true;//根据页面地址设置当前页面状态    
        }
      }
      _curPage.setData({
        tabBar: tabBar
      });
    },
    //第二种状态的底部  
    editTabBar2: function () {
      var _curPageArr = getCurrentPages();
      var _curPage = _curPageArr[_curPageArr.length - 1];
      var _pagePath = _curPage.__route__;
      if (_pagePath.indexOf('/') != 0) {
        _pagePath = '/' + _pagePath;
      }
      var tabBar = this.globalData.tabBar2;
      for (var i = 0; i < tabBar.list.length; i++) {
        tabBar.list[i].active = false;
        if (tabBar.list[i].pagePath == _pagePath) {
          tabBar.list[i].active = true;//根据页面地址设置当前页面状态    
        }
      }
      _curPage.setData({
        tabBar: tabBar
      });
    },
    editTabBar3: function () {
      var _curPageArr = getCurrentPages();
      var _curPage = _curPageArr[_curPageArr.length - 1];
      var _pagePath = _curPage.__route__;
      if (_pagePath.indexOf('/') != 0) {
        _pagePath = '/' + _pagePath;
      }
      var tabBar = this.globalData.tabBar3;
      for (var i = 0; i < tabBar.list.length; i++) {
        tabBar.list[i].active = false;
        if (tabBar.list[i].pagePath == _pagePath) {
          tabBar.list[i].active = true;//根据页面地址设置当前页面状态    
        }
      }
      _curPage.setData({
        tabBar: tabBar
      });
    },
    getUserInfo: function (cb) {
      var that = this
      if (this.globalData.userInfo) {
        typeof cb == "function" && cb(this.globalData.userInfo)
      } else {
        //调用登录接口  
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    },
    globalData: {
      userInfo: null,
      tabBar: {
        "color": "#9E9E9E",
        "selectedColor": "#f00",
        "backgroundColor": "#fff",
        "borderStyle": "#ccc",
        "list": [
          {
            "pagePath": "/pages/hr/logined/logined",
            "text": "首页",
            "iconPath": "/images/首页选中.png",
            "selectedIconPath": "/images/首页选中.png",
            "clas": "menu-item",
            "selectedColor": "#03A9F4",
            active: true
          },
          {
            "pagePath": "/pages/hr/hr-message/hr-message",
            "text": "消息",
            "iconPath": "/images/消息未选中.png",
            "selectedIconPath": "/images/消息未选中.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item",
            active: false
          },
          {
            "pagePath": "/pages/hr/admin/logined_me",
            "text": "我的",
            "iconPath": "/images/我的未选中.png",
            "selectedIconPath": "/images/我的未选中.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item",
            active: false
          }
        ],
        "position": "bottom"
      },
      tabBar2: {
        "color": "#9E9E9E",
        "selectedColor": "#f00",
        "backgroundColor": "#fff",
        "borderStyle": "#ccc",
        "list": [
          {
            "pagePath": "/pages/hr/logined/logined",
            "text": "首页",
            "iconPath": "/images/首页未选中.png",
            "selectedIconPath": "/images/首页未选中.png",
            "clas": "menu-item2",
            "selectedColor": "#4EDF80",
            active: true
          },
          {
            "pagePath": "/pages/hr/hr-message/hr-message",
            "text": "消息",
            "iconPath": "/images/消息选中.png",
            "selectedIconPath": "/images/消息选中.png",
            "selectedColor": "#03A9F4",
            "clas": "menu-item2",
            active: false
          },
          {
            "pagePath": "/pages/hr/admin/logined_me",
            "text": "我的",
            "iconPath": "/images/我的未选中.png",
            "selectedIconPath": "/images/我的未选中.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item2",
            active: false
          },
        
        ],
        "position": "bottom"
      },
      tabBar3: {
        "color": "#9E9E9E",
        "selectedColor": "#f00",
        "backgroundColor": "#fff",
        "borderStyle": "#ccc",
        "list": [
          {
            "pagePath": "/pages/hr/logined/logined",
            "text": "首页",
            "iconPath": "/images/首页未选中.png",
            "selectedIconPath": "/images/首页未选中.png",
            "clas": "menu-item2",
            "selectedColor": "#4EDF80",
            active: true
          },
          {
            "pagePath": "/pages/hr/hr-message/hr-message",
            "text": "消息",
            "iconPath": "/images/消息未选中.png",
            "selectedIconPath": "/images/消息未选中.png",
            "selectedColor": "#4EDF80",
            "clas": "menu-item2",
            active: false
          },
          {
            "pagePath": "/pages/hr/admin/logined_me",
            "text": "我的",
            "iconPath": "/images/我的选中.png",
            "selectedIconPath": "/images/我的选中.png",
            "selectedColor": "#03A9F4",
            "clas": "menu-item2",
            active: false
          },

        ],
        "position": "bottom"
      }
    }
    
})  
    
