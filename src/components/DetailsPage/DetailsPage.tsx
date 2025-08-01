import { useOutletContext, useParams } from 'react-router-dom';

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { universities, handleCloseDetailsPage } =
    useOutletContext<OutletContext>();

  if (!universities || universities.length === 0 || !id) {
    return <p>No university data available</p>;
  }

  const selectedUniversity = universities.find((u: University) =>
    u.domains.includes(id || '')
  );

  if (!selectedUniversity) {
    return <p>No university found</p>;
  }

  return (
    <div className="details-container">
      <button onClick={handleCloseDetailsPage} className="close-details">
        Close
      </button>
      <h2>{selectedUniversity.name}</h2>
      <p>
        <strong>Country:</strong> {selectedUniversity.country}
      </p>
      <p>
        <strong>Domains:</strong> {selectedUniversity.domains.join(', ')}
      </p>
      <p>
        <strong>Web Site:</strong>{' '}
        <a
          href={selectedUniversity.web_pages[0]}
          target="_blank"
          rel="noreferrer"
        >
          {selectedUniversity.web_pages[0]}
        </a>
      </p>
    </div>
  );
};

export { DetailsPage };
