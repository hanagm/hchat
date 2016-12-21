/**
 * Created by lihejia on 16/12/19.
 */
import React from 'react';

import {NotificationContainer} from 'react-notifications';

class AppView extends  React.Component{
    constructor(props){
        super(props);
    }


    render(){


        return (
            <div className="app-container">
                    <div className="app-modal">
                        {this.props.children}
                    </div>
                <NotificationContainer/>
            </div>
        )
    }
}

export  default  AppView;