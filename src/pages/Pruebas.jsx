import { useEffect, useState } from 'react';
import axios from 'axios';

const Pruebas = () => {

  const [pdf, setPdf] = useState('')


  const getPruebas = async () => {
    try {

      const response = await axios.post('http://10.2.0.70:81/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393')

      console.log(response.data.object)
      setPdf(response.data.object[0].pdfs[0].pdf64);

    } catch (error) {
      throw new Error(error)
    }
  }

  const openPDFInNewTab = () => {
    const newWindow = window.open();
    newWindow.document.write('<iframe src="data:application/pdf;base64,' + pdf + '" width="100%" height="100%"></iframe>');
  }

  useEffect(() => {
    getPruebas()
  }, [])
  
  return (
    <div>
      Pruebas

      <div>
        <embed
          src={`data:application/pdf;base64,${pdf}`}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </div>

      <a href={""} target="_blank" rel="noopener noreferrer" onClick={openPDFInNewTab}>Abrir PDF en Nueva Pestaña</a>
    </div>
  )
}

export default Pruebas
