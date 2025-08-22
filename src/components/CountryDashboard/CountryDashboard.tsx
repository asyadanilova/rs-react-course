import { useState, useMemo, useCallback, useEffect } from 'react';
import { co2DataResource } from '../../api/co2Resource';
import Controls from '../Controls/Controls';
import CountryTable from '../CountryTable/CountryTable';
import type { CountryPayload } from '../../utils/types';
import ColumnSelectModal from '../ColumnSelectModal/ColumnSelectModal';
import { AVAILABLE_COLUMNS } from '../../utils/consts';
import styles from '../../styles/CountryDashboard.module.css';

const CountryDashboard = () => {
  const allCo2Data = co2DataResource.read() as unknown as Record<
    string,
    CountryPayload
  >;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState(2022);
  const [isHighlighting, setIsHighlighting] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: 'country',
    direction: 'ascending',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([
    'population',
    'co2',
    'co2_per_capita',
  ]);

  const availableYears = useMemo(() => {
    if (allCo2Data['World']) {
      return allCo2Data['World'].data.map((d) => d.year).reverse();
    }
    return Array.from({ length: 73 }, (_, i) => 2022 - i);
  }, [allCo2Data]);

  const handleYearChange = useCallback((year: number) => {
    setSelectedYear(year);
    setIsHighlighting(true);
  }, []);

  useEffect(() => {
    if (isHighlighting) {
      const timer = setTimeout(() => setIsHighlighting(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isHighlighting]);

  const handleColumnToggle = useCallback((column: string) => {
    setSelectedColumns((prev) =>
      prev.includes(column)
        ? prev.filter((c) => c !== column)
        : [...prev, column]
    );
  }, []);

  const flatYearlyData = useMemo(() => {
    console.log(
      `Performing expensive data flattening for year ${selectedYear}...`
    );
    return Object.entries(allCo2Data).map(([countryName, payload]) => {
      const yearData = payload.data.find((d) => d.year === selectedYear);

      const row: { [key: string]: string | number } = {
        country: countryName,
        iso_code: payload.iso_code || 'N/A',
      };

      selectedColumns.forEach((col) => {
        const value = yearData?.[col as keyof typeof yearData];
        row[col] = typeof value === 'number' ? value : 'N/A';
      });

      return row;
    });
  }, [allCo2Data, selectedYear, selectedColumns]);

  const processedData = useMemo(() => {
    console.log('Performing cheap filtering and sorting...');
    const filteredData = searchTerm
      ? flatYearlyData.filter((d) =>
          String(d.country).toLowerCase().includes(searchTerm.toLowerCase())
        )
      : flatYearlyData;

    const sortedData = [...filteredData].sort((a, b) => {
      const key = sortConfig.key as keyof typeof a;
      const aValue = a[key];
      const bValue = b[key];

      if (aValue === 'N/A') return 1;
      if (bValue === 'N/A') return -1;

      let comparison = 0;
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return sortConfig.direction === 'ascending' ? comparison : -comparison;
    });

    return sortedData;
  }, [searchTerm, sortConfig, flatYearlyData]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleSort = useCallback((key: string) => {
    setSortConfig((currentConfig) => {
      if (currentConfig.key !== key) {
        return { key, direction: 'ascending' };
      }

      return {
        key,
        direction:
          currentConfig.direction === 'ascending' ? 'descending' : 'ascending',
      };
    });
  }, []);

  return (
    <div>
      <Controls
        onSearch={handleSearch}
        onSort={handleSort}
        onShowColumnModal={() => setIsModalOpen(true)}
        years={availableYears}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        searchTerm={searchTerm}
      />
      <ColumnSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        allColumns={AVAILABLE_COLUMNS}
        selectedColumns={selectedColumns}
        onColumnToggle={handleColumnToggle}
      />
      <h2 className={styles.yearHeader}>Displaying Data for {selectedYear}</h2>
      <div className={isHighlighting ? styles.highlight : ''}>
        <CountryTable data={processedData} />
      </div>
    </div>
  );
};

export default CountryDashboard;
