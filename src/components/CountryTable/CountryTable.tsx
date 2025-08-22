import styles from '../../styles/CountryTable.module.css';
import type { CountryTableProps } from '../../utils/types';

const CountryTable = ({ data }: CountryTableProps) => {
  if (data.length === 0) {
    return <p>No data to display.</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header.replace(/_/g, ' ')}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={String(row.iso_code || row.country)}>
              {headers.map((header) => (
                <td key={header}>
                  {typeof row[header] === 'number'
                    ? (row[header] as number).toLocaleString()
                    : String(row[header])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
