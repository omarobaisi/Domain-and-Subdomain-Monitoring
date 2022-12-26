import React from 'react';
import Details from '../components/details/details.component';

function Detail(props) {

    return (
        <div className="Details">
            <Details certificate={props.currentCertificates} message={props.message}/>
        </div>
    );
}

export default Detail;