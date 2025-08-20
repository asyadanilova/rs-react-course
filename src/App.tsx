import { createPortal } from 'react-dom';
import styles from './styles/styles.module.css'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'
import Form from './components/Form/Form';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Results from './components/Results/Results';
import type { IForm } from './utils/types';

function App() {
  const [activeForm, setActiveForm] = useState<'uncontrolled' | 'controlled' | null>(null);
  const [formData, setFormData] = useState<IForm | null>(null);

  const handleFormSubmit = (data: IForm) => {
    setFormData(data);
    setActiveForm(null);
  };

  const handleOpenForm = (formType: 'uncontrolled' | 'controlled') => {
    setFormData(null);
    setActiveForm(formType);
  };

  return (
    <>
      <h1 className={styles.title}>Complete Forms</h1>
      <button className={styles['open-modal-btn']} onClick={() => handleOpenForm('uncontrolled')}>
        Open Uncontrolled Form
      </button>
      <button className={styles['open-modal-btn']} onClick={() => handleOpenForm('controlled')}>
        Open Controlled Form
      </button>

      {activeForm && createPortal(
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <button className={styles['modal-close-btn']} onClick={() => setActiveForm(null)} >
              <i className="bi bi-x-circle"></i>
            </button>
            {activeForm === 'uncontrolled' && <UncontrolledForm onSubmitSuccess={handleFormSubmit}/>}
            {activeForm === 'controlled' && <Form onSubmitSuccess={handleFormSubmit}/>}
          </div>
        </div>,
        document.getElementById("modal-root")!
      )}
      {formData && <Results data={formData} />}
    </>
  )
}

export default App;

