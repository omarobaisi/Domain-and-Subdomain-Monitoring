import React from 'react';
import styles from './Header.module.css'

function Header(props) {
    return (
        <div>
            <h1 className={styles.header}>{props.text}</h1>
        </div>
    );
}

export default Header;