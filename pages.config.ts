import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'uniapp-starter',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f8f8f8',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#333',
    selectedColor: '#27ba9b',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'static/tabbar/home_default.png',
        selectedIconPath: 'static/tabbar/home_selected.png',
      },
      {
        text: '分类',
        pagePath: 'pages/category/category',
        iconPath: 'static/tabbar/category_default.png',
        selectedIconPath: 'static/tabbar/category_selected.png',
      },
      {
        text: '购物车',
        pagePath: 'pages/cart/cart',
        iconPath: 'static/tabbar/cart_default.png',
        selectedIconPath: 'static/tabbar/cart_selected.png',
      },
      {
        text: '我的',
        pagePath: 'pages/my/my',
        iconPath: 'static/tabbar/user_default.png',
        selectedIconPath: 'static/tabbar/user_selected.png',
      },
    ],
  },
})
