import GeekIcon from '@/components/geek-icon'
// 定义一个vue插件模块,我们在项目中一般会把 全局组件，过滤器，指令，定义在一个插件模块中。js模块的格式就是一个对象中有install函数即可。
// 如果都在main中书写，main的代码就很混乱，不利于维护。
export default {
  install (Vue) {
    // 在这里扩展Vue功能,在main.js中使用
    Vue.component(GeekIcon.name, GeekIcon)
  }
}
