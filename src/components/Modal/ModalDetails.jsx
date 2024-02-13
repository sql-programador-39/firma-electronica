import { useState } from 'react';
import { Modal } from 'antd';

import CardAccion from '../CardAccion/CardAccion';
import CardFirmante from '../CardFirmante/CardFirmante';

import '../../components/CardControl/CardControl.css';
import './ModalDetails.css';

const ModalDetails = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className='button-card' onClick={showModal}>
        Detalle
      </button>
      <Modal 
        title="Detalle de la Solicitud"
        width="42%" 
        open={isModalOpen}
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
                <p>Camilo Alejandro Ardila Molina</p>
              </div>

              <div>
                <p className='p-modal'>Identificación:</p>
                <p>1128456987</p>
              </div>

              <div>
                <p className='p-modal'>Fecha Solicitud:</p>
                <p>2021/12/10</p>
              </div>

              <div>
                <p className='p-modal'>Fecha Estado:</p>
                <p>2022/02/25</p>
              </div>
            </div>

            <div>
              <div>
                <p className='p-modal'>Estado:</p>
                <p>Completada</p>
              </div>
              <div>
                <p className='p-modal'>Canal:</p>
                <p>El que sea</p>
              </div>

              <div className='modal-info-button'>
                <p className='p-modal'>Archivo:</p>
                <button>Descargar</button>
              </div>
            </div>
          </div>
        </section>

        <section className='modal-info2'>
          <div>
            <h3>Firmantes</h3>
            <div className='body-modal-info'>
              <CardFirmante />
              <CardFirmante />
            </div>
          </div>

          <div>
            <h3>Seguimiento</h3>

            <div className='body-modal-info'>
              <CardAccion />
              <CardAccion />
              <CardAccion />
              <CardAccion />
            </div>
          </div>
        </section>
      </Modal>
    </>
  )
}

export default ModalDetails
