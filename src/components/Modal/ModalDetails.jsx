import { useState } from 'react';
import { Modal } from 'antd';

import CardAccion from '../CardAccion/CardAccion';
import CardFirmante from '../CardFirmante/CardFirmante';

import '../../components/CardControl/CardControl.css';
import './ModalDetails.css';

const ModalDetails = ({data}) => {

  const { nombre, identificacion, fechaSolicitud, estado, fechaEstado, firmantes, acciones, canal } = data[0];

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
        title="Detalle de la Solicitud"
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
                <p>{ nombre }</p>
              </div>

              <div>
                <p className='p-modal'>Identificación:</p>
                <p>{ identificacion }</p>
              </div>

              <div>
                <p className='p-modal'>Fecha Solicitud:</p>
                <p>{ fechaSolicitud }</p>
              </div>

              <div>
                <p className='p-modal'>Fecha Estado:</p>
                <p>{ fechaEstado }</p>
              </div>
            </div>

            <div>
              <div>
                <p className='p-modal'>Estado:</p>
                <p>{ estado }</p>
              </div>
              <div>
                <p className='p-modal'>Canal:</p>
                <p>{ canal }</p>
              </div>

              <div className='modal-info-button'>
                <p className='p-modal'>Archivo:</p>
                <button>Descargar</button>
              </div>
            </div>
          </div>
        </section>

        <section className='modal-info2'>
          <div >
            <h3>Firmantes</h3>
            <div className='body-modal-info-1'>
              {firmantes.map((firmante, index) => (
                <CardFirmante key={index} data={firmante} />
              ))}
            </div>
          </div>

          <div>
            <h3>Seguimiento</h3>

            <div className='body-modal-info-2'>
              {acciones.map((accion, index) => (
                <CardAccion key={index} data={accion} />
              ))}
            </div>
          </div>
        </section>
      </Modal>
    </>
  )
}

export default ModalDetails
