import React from 'react';
import styles from './NotFound.module.css'

function NotFound(props) {
    return (
        <div className={styles.text}>
            <h1>No result found</h1>
        </div>
    );
}

export default NotFound;