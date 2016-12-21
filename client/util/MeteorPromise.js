/**
 * Created by lihejia on 16/12/19.
 */

import {Meteor} from 'meteor/meteor';
/***
 * 可以使用promise的方法
 * @returns {Promise.<void>}
 * @constructor
 */

export default  async  function MeteorPromise(meteod,...opts){
    try{
       return  await  Meteor.callPromise(meteod,...opts).then((callback)=>(callback));
    }
    catch (e){
        return e;
    }

}