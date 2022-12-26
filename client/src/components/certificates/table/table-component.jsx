import React from 'react';
import Row from '../row/row-component';
import Filter from '../filter/filter.component';
import NotFound from '../../notFound/notfound.component';
import styles from './Table.module.css';

function Table(props) {

    return (
        props.certificates.length !== 0 ? (
            <div className={styles.result}>
                <div className={styles.tableEdits}>
                    <div>{props.certificates.length} results</div>
                    <Filter filterExpired={props.filterExpired}/>
                </div>
                <table className={styles.table}>
                    <caption></caption>
                    <thead>
                        <tr>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Issued</th>
                            <th className={styles.th}>Expires</th>
                            <th className={styles.th}>More Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.certificates.map((cer, i) => <Row cer={cer} key={i} setDetails={props.setDetails}/>)}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
            
        ) : (
            <div className={styles.result}>
                <div className={styles.tableEdits}>
                    <div>{props.certificates.length} results</div>
                    <Filter filterExpired={props.filterExpired}/>
                </div>
                <table className={styles.table}>
                    <caption></caption>
                    <thead>
                        <tr>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Issued</th>
                            <th className={styles.th}>Expires</th>
                            <th className={styles.th}>More Details</th>
                        </tr>
                    </thead>
                    <tfoot></tfoot>
                </table>
                <NotFound />
            </div>
        )
    );
}

export default Table;