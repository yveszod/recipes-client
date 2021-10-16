import React from 'react';
import ReactDOM from 'react-dom';
import loadingStyles from './Loading.module.css';

const LoadingWindow = () => {
    return (
        <div className={loadingStyles.wrapper}>
            <div className={loadingStyles.loader}></div>
        </div>
    )
}

const Loading = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<LoadingWindow />, document.getElementById('root'))}
        </React.Fragment>
    )
}

export default Loading
