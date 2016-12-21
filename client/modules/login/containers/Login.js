/**
 * Created by lihejia on 16/12/19.
 */


import React from 'react';
import {createForm} from 'rc-form';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {Meteor} from 'meteor/meteor';
import {Link} from 'dva/router';
import { NotificationManager} from 'react-notifications';


const Login =({form:{
    getFieldDecorator,
    getFieldsValue,
    validateFields
},dispatch,login
})=>{


    let {loading}=login;
    var submitClasses = "blue";
    if (loading) {
        submitClasses += " disabled";
    }

    function loginSubmit(e) {
        e.preventDefault();


        console.log(getFieldsValue())

        validateFields((error)=>{

            if(error){
                return;
            }

            let data=getFieldsValue();
            let {username,password}=data;

            Meteor.loginWithPassword(username,password,(err,res)=>{
                if(err){
                    NotificationManager.error(err.reason);
                    return;
                }
                dispatch(routerRedux.push({
                    pathname:'/'
                }))
            })

        })
    }

    function onChange(e){
    }

    return (
        <div className="login">

            <div className="title">
                <p> 登录</p>
            </div>

               <form className="login-form" onSubmit={loginSubmit}>
                   <div className="form-item">
                       {getFieldDecorator("username",{
                           rules:[{
                               required: true,
                           }]
                       })(
                           <input type="text" placeholder="用户名" onChange={onChange} />
                       )
                       }
                   </div>
                   <div className="form-item">

                       {getFieldDecorator("password",{
                           rules:[{
                               required: true,

                           }]
                       })(
                           <input type="password" placeholder="密码" onChange={onChange} />
                       )
                       }

                   </div>

                   <div className="dialog-buttons">
                       <button className={submitClasses} disabled={loading} type="submit"  > 登  录  </button>
                       <br/>

                   </div>
                   <Link to="/sign-up" >注 册</Link>
               </form>


        </div>
    )
}

function mapStateToProps({login}) {
    return {login}
}

export  default    connect(mapStateToProps)(createForm()(Login));