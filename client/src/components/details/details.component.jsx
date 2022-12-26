import React from 'react';
import { Link } from "react-router-dom";
import styles from './Details.module.css'
import NotFound from '../notFound/notfound.component';
import Header from '../certificates/header/header.component';
import moment from 'moment';

function Details(props) {
    return (
        <div>
            {props.certificate !== '' ? (
                <div>
                    <Header text={props.certificate.common_name}/>
                    <div className={styles.info}>
                        <div className={styles.flex}>
                            <div>entry_timestamp: </div>
                            <div>{moment(props.certificate.entry_timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        </div>
                        <div className={styles.flex}>
                            <div>id: </div>
                            <div>{props.certificate.id}</div>
                        </div>
                        <div className={styles.flex}>
                            <div>issuer_ca_id: </div>
                            <div>{props.certificate.issuer_ca_id}</div>
                        </div>
                        <div className={styles.flex}>
                            <div>issuer_name: </div>
                            <div>{props.certificate.issuer_name}</div>
                        </div>
                        <div className={styles.flex}>
                            <div>name_value: </div>
                            <div>{props.certificate.name_value}</div>
                        </div>
                        <div className={styles.flex}>
                            <div>not_after: </div>
                            <div>{moment(props.certificate.not_after).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        </div>
                        <div className={styles.flex}>
                            <div>not_before: </div>
                            <div>{moment(props.certificate.not_before).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        </div>
                        <div className={styles.flex}>
                            <div>serial_number: </div>
                            <div>{props.certificate.serial_number}</div>
                        </div>
                    </div>
                    <div className={styles.goBackDiv}><Link className={styles.link} to={`/`}><button className={styles.goBack}>Go back</button></Link></div>
                </div>
            ) : (
                <div>
                    <NotFound />
                    <div className={styles.goBackDiv}><Link className={styles.link} to={`/`}><button className={styles.goBack}>Go back</button></Link></div>
                </div>
            )}
        </div>
    );
}

export default Details;