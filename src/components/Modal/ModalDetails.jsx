import { useState } from 'react';
import { Modal } from 'antd';


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
      <Modal open={isModalOpen} onOk={handleOk} onCancel={() => setIsModalOpen(false)}>
        <section className='modal-info'>

          <div>
            <p>Identificación:</p>
            <p></p>
          </div>

          <div>
            <p>Fecha Solicitud:</p>
            <p></p>
          </div>

          <div>
            <p>Canal:</p>
            <p></p>
          </div>

          <div>
            <p>Nombre:</p>
            <p></p>
          </div>

          <div>
            <p>Estado:</p>
            <p></p>
          </div>

          <div>
            <p>Fecha Estado:</p>
            <p></p>
          </div>

          <div>
            <button>Descargar</button>
          </div>
        </section>

        <section>
          <div>
            <p>Firmantes</p>

            <div>
              <div>
                <p>Identificación:</p>
                <p></p>
              </div>
              <div>
                <p>Nombre:</p>
                <p></p>
              </div>
              <div>
                <p>Email:</p>
                <p></p>
              </div>
              <div>
                <p>Telefono:</p>
                <p></p>
              </div>
            </div>
          </div>

          <div>
            Seguimiento
          </div>
        </section>
      </Modal>
    </>
  )
}

export default ModalDetails
