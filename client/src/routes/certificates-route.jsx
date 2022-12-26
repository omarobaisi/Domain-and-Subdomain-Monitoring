import React from 'react';
import Header from '../components/certificates/header/header.component';
import Input from '../components/certificates/input/input-component';
import Table from '../components/certificates/table/table-component';

function Certificates(props) {

    return (
        <div className="App">
            <Header text={'Domain and Subdomain Monitoring'}/>
            <Input saveCertificate={props.saveCertificate}/>
            <Table certificates={props.certificates} setDetails={props.setDetails} filterExpired={props.filterExpired} expiredFiltered={props.expiredFiltered}/>
        </div>
    );
}

export default Certificates;