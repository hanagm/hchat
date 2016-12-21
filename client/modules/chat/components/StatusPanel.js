/**
 * Created by lihejia on 16/12/21.
 */

//错误提醒或者状态提醒

    import  React,{PropTypes} from 'react';

const StatusPanel =({loading,errorText})=>{


    var errorClass = null;
    var errorText = ' ';
    if (errorText && showError) {
        errorClass = "error-alert";
        errorText = this.props.errorText;
    }
    return (
        <div id="alert-box" className={errorClass}>{errorText}</div>
    );
}

StatusPanel.propTypes={
    loading:PropTypes.bool,
    errorText:PropTypes.string,
}
