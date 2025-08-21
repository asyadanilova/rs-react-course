import { createPortal } from 'react-dom';
import styles from './styles/styles.module.css'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'
import Form from './components/Form/Form';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Results from './components/Results/Results';
import type { IForm } from './utils/types';
import { useSelector, useDispatch } from 'react-redux';
import { setFormData, clearFormData } from '../src/hooks/formSlice';
import type { RootState } from './store/store';

function App() {
  const [activeForm, setActiveForm] = useState<'uncontrolled' | 'controlled' | null>(null);

  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.formData.data);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (data: IForm) => {
    dispatch(setFormData(data));
    setActiveForm(null);
  };

  const handleOpenForm = (formType: 'uncontrolled' | 'controlled') => {
    dispatch(clearFormData());
    setActiveForm(formType);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveForm(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveForm(null);
      }
    };

    if (activeForm) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeForm]);

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
          <div className={styles['modal-content']} ref={modalRef}>
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

