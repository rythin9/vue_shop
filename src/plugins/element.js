// 导入element组件区域，写法如下
import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// message导入方式不同与上面
Vue.prototype.$message = Message