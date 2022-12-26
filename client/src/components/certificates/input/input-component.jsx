import React from 'react';
import axios from 'axios';
import styles from './input.module.css'

function Input(props) {

    const fetchCertificate = (e) => {
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/${e.target.domain.value}`)
        .then(res => props.saveCertificate(res.data))
        .catch(err => console.log(err))
    }

    return (
        <form className={styles.form} onSubmit={fetchCertificate}>
            <input type="text" name='domain' className={styles.input} required/>
            <button className={styles.btn}><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    );
}

export default Input;