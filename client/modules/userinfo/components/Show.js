/**
 * Created by lihejia on 16/12/21.
 */
import React from 'react'
import {Link} from 'dva/router';


const Show =({avatar,nikename,onUpdate})=> {

    console.log(nikename,avatar)



    return (

            <ul className="list">
                <li className="show_avatar" onClick={()=>onUpdate()}>
                    <img src={avatar} />
                </li>
                <li  onClick={()=>onUpdate()}>
                    昵称:{nikename}
                </li>
                <li>
                    <Link  to="/">返回列表</Link>
                </li>
            </ul>

    )
}

export  default  Show;