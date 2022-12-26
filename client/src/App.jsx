import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificates from "./routes/certificates-route";
import Detail from "./routes/details.route";
import moment from 'moment';
import "./App.css";

function App() {
  const [certificates, setCertificates] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [currentCertificates, setCurrentCertificates] = useState("");
  const [expiredFiltered, setExpiredFiltered] = useState(false);
  const [message, setMessage] = useState('Try to search for something');

  const IsExpired = expireDate => {
    const MinutesBeforeNow = moment().diff(expireDate, 'minutes');
    if(MinutesBeforeNow > 0) {
      return true
    } else {
      return false
    }
  }
  const filterExpired = () => {
    if(expiredFiltered === false) {
      const newCertificates = []
      for(let cer of certificates) {
        if(!IsExpired(cer.not_after)) {
          newCertificates.push(cer)
        }
      }
      setFilteredCertificates(newCertificates)
      setExpiredFiltered(true)
    } else {
      const newCertificates = []
      for(let cer of certificates) {
        newCertificates.push(cer)
      }
      setFilteredCertificates(newCertificates)
      setExpiredFiltered(false)
    }
  }
  const saveCertificate = (data) => {
    setExpiredFiltered(false)
    setCertificates(data);
    setFilteredCertificates(data);
    setMessage('No result found')
  };
  const setDetails = (certificate) => {
    setCurrentCertificates(certificate);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Certificates
              certificates={filteredCertificates}
              saveCertificate={saveCertificate}
              setDetails={setDetails}
              filterExpired={filterExpired}
              expiredFiltered={expiredFiltered}
              message={message}
            />
          }
        ></Route>
        <Route
          path="/details"
          element={<Detail currentCertificates={currentCertificates} message={message} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
