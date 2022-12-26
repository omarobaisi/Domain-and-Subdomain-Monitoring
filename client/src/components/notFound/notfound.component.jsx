import React from 'react';
import styles from './NotFound.module.css'

function NotFound(props) {
    return (
        <div className={styles.text}>
            <h1>{props.message}</h1>
        </div>
    );
}

export default NotFound;