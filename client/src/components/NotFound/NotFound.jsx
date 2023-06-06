import React from 'react';
import s from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.header1}>404</h1>
            <h2 className={s.header2}>Not found</h2>
        </div>
    );
};

export default NotFound;