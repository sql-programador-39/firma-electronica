import { useState } from 'react';
import { Modal } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
 
import CardAccion from '../CardAccion/CardAccion';
import CardFirmante from '../CardFirmante/CardFirmante';

import { formatDate } from '../../helpers/formatDate';
import { changeStatusName, changeChannelName } from '../../helpers/changeNames';

import '../../components/CardControl/CardControl.css';
import './ModalDetails.css';

const ModalDetails = ({data}) => {

  const { requestNumber, fullName, identification, requestDate, estadoSolicitud, fechaEstado, digitalSigners, actionTracking, channel, pdfs } = data[0];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sizes, setSizes] = useState("");

  const showModal = () => {
    setIsModalOpen(true);

    if(window.innerWidth < 540) {
      setSizes('90%');
    } else if(window.innerWidth > 540 && window.innerWidth < 1281) {
      setSizes('70%');
    } else if(window.innerWidth > 1282){
      setSizes('50%');
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const openPdf = (index) => {
    if(pdfs.length > 0){
      const newWindow = window.open();
      newWindow.document.write('<iframe src="data:application/pdf;base64,' + pdfs[index].pdf64 + '" width="100%" height="100%"></iframe>');
    }
  }

  return (
    <>
      <button className='button-card' onClick={showModal}>
        {
          window.innerWidth > 820 ? (
            'Detalle'
          ) : (
            '+'
          )
        }
      </button>
      
      <Modal 
        title={`Detalle de la Solicitud: ${requestNumber}`}
        open={isModalOpen}
        width={sizes}
        onCancel={handleOk} 
        footer={[
          <button key="submit" className='button-card' onClick={handleOk}>
            OK
          </button>,
          // Puedes omitir el botón de "Cancelar" aquí
        ]}
      >
        <section className='modal-info'>
          <div>
            <div>
              <div>
                <p className='p-modal'>Nombre:</p>
                <p>{ fullName }</p>
              </div>

              <div>
                <p className='p-modal'>Identificación:</p>
                <p>{ identification }</p>
              </div>

              <div>
                <p className='p-modal'>Fecha Solicitud:</p>
                <p>{ formatDate(requestDate) }</p>
              </div>

              <div>
                <p className='p-modal'>Fecha Estado:</p>
                <p>{ fechaEstado }</p>
              </div>
            </div>

            <div>
              <div>
                <p className='p-modal'>Estado:</p>
                <p>{ changeStatusName(estadoSolicitud) }</p>
              </div>
              <div>
                <p className='p-modal'>Canal:</p>
                <p>{ changeChannelName(channel) }</p>
              </div>

              <div className='modal-info-button'>
                <p className='p-modal'>Documentos:</p>

                {pdfs.length > 0 ? 
                  (
                    pdfs.map((pdf, index) => (
                      <button key={index} onClick={() => openPdf(index)}><FontAwesomeIcon icon={faFilePdf} /></button>
                    ))
                  ) 
                  : 
                  (
                    <p>No hay documentos</p>
                  )
                }
                
              </div>
            </div>
          </div>
        </section>

        <section className='modal-info2'>
          <div >
            <h3>Firmantes</h3>
            <div className='body-modal-info-1'>
              {digitalSigners.length > 0 ? (
                digitalSigners.map((firmante, index) => (
                  <CardFirmante key={index} data={firmante} />
                ))
              ) : (
                <p className='p-modal-withoutinfo'>No hay firmantes</p>
              )}
            </div>
          </div>

          <div>
            <h3>Seguimiento</h3>

            <div className='body-modal-info-2'>
              {actionTracking.length > 0 ? (
                actionTracking.map((accion, index) => (
                  <CardAccion key={index} data={accion} />
                ))
              ) : (
                <p className='p-modal-withoutinfo'>No hay acciones</p>
              )}
            </div>
          </div>
        </section>
      </Modal>
    </>
  )
}

export default ModalDetails
