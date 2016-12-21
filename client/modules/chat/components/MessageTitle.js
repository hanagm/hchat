/**
 * Created by lihejia on 16/12/21.
 */

import React from 'react';

const MessageTitle =({title,lastSeen})=>{
    return (
        <div id="topic-caption-panel">

            <div id="topic-title-group">
                <div id="topic-title" className="panel-title">{title}</div>
                <div id="topic-last-seen">{lastSeen}</div>
            </div>
            <div id="topic-users">users online and menu buttons</div>
            <div>
                <a href="#" onClick={()=>{}}>
                    <i className="material-icons big">more_vert</i>
                </a>
            </div>
        </div>

    )
}

export  default MessageTitle;