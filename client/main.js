/**
 * Created by lihejia on 16/12/19.
 */
import dva from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { browserHistory } from 'dva/router';

import router from './router/router';

import './css/base.css';

import 'react-notifications/lib/notifications.css';


//设置moment为中文
moment.locale('zh-cn');


//初始化dva，并且切换为browerHistory
const app=dva({
    history:browserHistory
});

//使用插件方法
app.use({});

//加载使用到的model
app.model(require('./modules/login/login-model'));
app.model(require('./modules/chat/models/contact-model'));
app.model(require('./modules/userinfo/userinfo-model'));


//初始化路由，目前只支持react router
app.router(router);

//开始
app.start("#root");