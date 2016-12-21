/**
 * Created by lihejia on 16/12/20.
 */


import React from 'react';
import {Link} from 'dva/router';



const SideNavBar =({title,avatar})=>{

    return (
        <div className="ide-caption-panel ">
            <Link to="/user_info"><img id="self-avatar" alt="avatar" src={avatar} /></Link>
            <div id="sidepanel-title" className="panel-title">{title}</div>

        </div>
    )
}

export default  SideNavBar;
