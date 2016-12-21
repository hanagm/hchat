/**
 * Created by lihejia on 16/12/21.
 */
import React from 'react';

import {Link} from 'dva/router';


class Update extends React.Component {
    constructor(props){
        super(props);
        this.state={
            avatar:'',
            nikename:''
        }
    }

    avatarHandle(e) {
        let value=e.target.value;
        this.setState({avatar:value})
    }



    nameHandle(e) {
        let value=e.target.value;
        console.log(value);
        this.setState({nikename:value})
    }

    save(e){
        let nikename=this.props.nikename;
        let avatar=this.props.avatar;

        if(!_.isEmpty(this.state.avatar)){
            avatar=this.state.avatar;
        }

        if(!_.isEmpty(this.state.nikename))
        {
            nikename=this.state.nikename;
        }
        let data={nikename,avatar}

       this.props.onSave(data)

    }

    render() {
        let {avatar,nikename}=this.props;
        return (
            <ul className="list">
                <li className="show_avatar">
                    头像Url:<input defaultValue={avatar} onChange={(e)=>this.avatarHandle(e)} onBlur={(e)=>this.save(e)}/>
                </li>
                <li >
                    昵称:<input defaultValue={nikename} onChange={(e)=>this.nameHandle(e)} onBlur={(e)=>this.save(e)}/>
                </li>
                <li>
                    <Link  to="/">返回列表</Link>
                </li>
            </ul>
        )
    }
}

export  default Update;