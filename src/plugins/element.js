// 导入element组件区域，写法如下
import Vue from 'vue'
import {
    Button, Form, FormItem, Input, Message, Container, Header, Aside,
    Main, Menu, Submenu, MenuItem
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

// message导入方式不同与上面
Vue.prototype.$message = Message