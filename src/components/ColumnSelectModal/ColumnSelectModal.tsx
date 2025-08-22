import styles from '../../styles/ColumnSelectModal.module.css';
import type { ColumnSelectModalProps } from '../../utils/types';

const ColumnSelectModal = ({
  isOpen,
  onClose,
  allColumns,
  selectedColumns,
  onColumnToggle,
}: ColumnSelectModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Select Columns to Display</h2>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>
        <div className={styles.columnList}>
          {allColumns.map((column) => (
            <div key={column} className={styles.checkboxItem}>
              <input
                type="checkbox"
                id={`col-${column}`}
                checked={selectedColumns.includes(column)}
                onChange={() => onColumnToggle(column)}
              />
              <label htmlFor={`col-${column}`}>
                {column.replace(/_/g, ' ')}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColumnSelectModal;
