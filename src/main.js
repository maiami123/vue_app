import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import {
    Button,
    Icon,
    Tab,
    Tabs,
    Toast,
    TreeSelect,
    Stepper,
    ActionBarButton,
    ActionBarIcon,
    ActionBar,
    Checkbox,
    CheckboxGroup
  } from 'vant';
import router from './router/index';
import '../src/common/css/base.less'
import store from './store';

const app = createApp(App);

app
  .use(Button)
  .use(Icon)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(TreeSelect)
  .use(Stepper)
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Checkbox)
  .use(CheckboxGroup);

app.use(router)
app.use(store)

app.mount('#app');
