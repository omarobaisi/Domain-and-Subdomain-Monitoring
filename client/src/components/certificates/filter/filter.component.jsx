import React from 'react';
import styles from '../table/Table.module.css'

function Filter(props) {

    const filter = () => {
        props.filterExpired()
    }

    return (
        <div className={styles.filterDiv}>
            <input onChange={filter} type="checkbox" name="" id="" />
            <div>Filter expired</div>
        </div>
    );
}

export default Filter;