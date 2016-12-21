

/**
 * Created by lihejia on 16/12/21.\
 * 未建立聊天时的右侧界面
 */

import React from 'react';

const Dummy =()=>{


    var version = " build v1.0.0";
    return (
        <div id="dummy-view" >
            <div>
                <a target="_blank" href="https://github.com/hanagm/hchat/">
                    <img id="logo" alt="logo" src="/img/logo.svg" />
                    <h2>Meteor Demo Chat</h2>
                </a>
                <p>Client: {version}</p>
                <p>Server: Meteor 1.4</p>
            </div>
        </div>
    );
}

export  default  Dummy;
