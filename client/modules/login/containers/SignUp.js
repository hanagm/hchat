/**
 * Created by lihejia on 16/12/19.
 */


import React from 'react';
import {createForm} from 'rc-form';
import {connect} from 'dva';
import {Link} from 'dva/router';

const SignUp =({form:{
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

    function signUp(e) {
        e.preventDefault();

        validateFields((error)=>{

            if(error){
                return;
            }
            let data=getFieldsValue();

            dispatch({
                type:'login/signUp',
                payload:data
            })

        })
    }

    function onChange(e){

    }

    return (
        <div className="login">

            <div className="title">
                <p> 注  册</p>
            </div>

            <form className="login-form" onSubmit={signUp}>
                <div className="form-item">
                    {getFieldDecorator("username",{
                        initialValue:'',
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
                        initialValue:'',
                        rules:[{
                            required: true,
                        }]
                    })(
                        <input type="password" placeholder="密码" onChange={onChange} />
                    )
                    }

                </div>

                <div className="dialog-buttons">
                    <button className={submitClasses} type="submit"  >注 册</button>
                    <br/>

                </div>
                <Link to="/login" >登录</Link>
            </form>


        </div>
    )
}

function mapStateToProps({login}) {
    return {login}
}

export  default    connect(mapStateToProps)(createForm()(SignUp));