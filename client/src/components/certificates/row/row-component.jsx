import React from 'react';
import { Link } from "react-router-dom";
import styles from './Row.module.css';

function Row(props) {

    const setDetails = () => {
        props.setDetails(props.cer)
    }

    return (
        <tr className={`row`}>
            <td className={styles.td}>{props.cer.common_name}</td>
            <td className={styles.td}>{props.cer.not_before}</td>
            <td className={styles.td}>{props.cer.not_after}</td>
            <td className={styles.td} onClick={setDetails}><Link className={styles.link} to={`/details`}>Show details</Link></td>
        </tr>
    );
}

export default Row;